import Joi from "@hapi/joi";
import _ from "lodash";
import Schemas from "./schemas";

export default schema => (req, res, next) => {
  const data = req.body;
  if (_.has(Schemas, schema)) {
    const selectedSchema = _.get(Schemas, schema);
    const result = Joi.validate(data, selectedSchema, { abortEarly: false });
    if (!result.error) {
      req.body = data;
      next();
    } else {
      const allErrors = [];
      result.error.details.forEach(errors => {
        const findError = allErrors.filter(
          error => error === errors.context.label
        );
        if (findError.length === 0) {
          allErrors.push(errors.context.label);
        }
      });
      return res.status(400).send({
        status: 400,
        data: { message: allErrors }
      });
    }
  }
};

import Joi from '@hapi/joi'

const password = Joi.string()
	.trim()
	.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)
	.required()
	.label('Password is required and must be at least 8 letters containing'
  + ' at least a number a Lowercase letter and an Uppercase letter')
const email = Joi.string()
	.trim()
	.lowercase()
	.email()
	.required()
	.label('Email is required and should look like this : example@email.com!')

export default {
  signup: Joi.object().keys({
    firstName: Joi.string()
      .trim()
      .required()
      .regex(/^[A-Za-z_-]+$/)
      .min(3)
      .label(
        "First name is required, it must have at least 3 letters and must contain only letters, underscores(_) and hyphens (-)"
      ),
    lastName: Joi.string()
      .trim()
      .required()
      .regex(/^[A-Za-z_.-]+$/)
      .min(3)
      .label(
        "Last name is required, it must have at least 3 letters and must contain only letters, underscores(_) and hyphens (-)"
      ),
    username: Joi.string()
      .trim()
      .lowercase()
      .required()
      .regex(/^[a-zA-Z0-9_.-]+$/)
      .min(3)
      .label(
        "Username is required, it must have at least 3 letters and must contain only letters, numbers, underscores(_), hyphens (-) and points (.)"
      ),
    email,
    password,
    userrole: Joi.string()
      .valid("admin", "teacher", "director of study", "school manager")
      .required()
      .label(
        "Userrole is required, it ust be one of the followinf items [ admin, teacher, director of study, school manager ]"
      )
  })
};

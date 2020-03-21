import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

export default app => {
  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cors());
  if (process.env.NODE_ENV !== "test") {
    app.use(morgan("dev"));
  }
};

import express from "express";
import dotenv from "dotenv";
import api from "./api/routes/index";
import globalMiddleware from "./middleware/globalMiddleware";
import db from "./sequelize/models/index";
dotenv.config();

const app = express();
const { sequelize } = db;
const port = process.env.PORT || 3000;
globalMiddleware(app);
app.get("/", (req, res) => {
  res.redirect("/docs");
});
app.use("/api", api);
app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: {
      message: "Page Not found"
    }
  });
});
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(
      `Database succesfully connected\nPID: ${process.pid} Server listening on port: ${port} in ${process.env.NODE_ENV} mode`
    );
  });
});

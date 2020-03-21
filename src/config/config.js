import dotenv from "dotenv";
dotenv.config();
const config = {};

config.development = {
  use_env_variable: "DEV_DATABASE_URL",
  host: "127.0.0.1",
  dialect: "postgres",
  logging: false
};

module.exports = config;

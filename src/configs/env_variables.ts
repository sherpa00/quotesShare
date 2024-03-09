import dotenv from "dotenv";

// configure node environment variable to use
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const ENV_VARIABLES = {
  PORT: process.env.PORT,
};

export default ENV_VARIABLES;

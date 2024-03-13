import express, { Express, Response, Request, NextFunction } from "express";
import morgan from "morgan";
import logger, {
  devMorganHttpLogger,
  prodMorganHttpLogger,
} from "./utils/loggers/customLogger";
import ENV_VARIABLES from "./configs/env_variables";
import BadRequestError from "./utils/errors/badRequestError";

// express app instance
const app: Express = express();

// initialize http logging
if (ENV_VARIABLES.environment === "development") {
  app.use(devMorganHttpLogger);
} else {
  app.use(prodMorganHttpLogger);
}

app.get(
  "/apiCheck",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({
        success: true,
        message: "Api is stable",
      });
    } catch (err) {
      logger.info("Error while getting routes /apiCheck");
      logger.error(err);
      next(err);
    }
  }
);

export default app;

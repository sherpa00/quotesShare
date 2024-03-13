import express, { Express, Response, Request, NextFunction } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import morgan from "morgan";
import logger, {
  devMorganHttpLogger,
  prodMorganHttpLogger,
} from "./utils/loggers/customLogger";
import ENV_VARIABLES from "./configs/env_variables";
import customErrorHandler from "./middlewares/errorHandler";

// express app instance
const app: Express = express();

// json and body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

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
      res.status(StatusCodes.OK).json({
        success: true,
        status: ReasonPhrases.OK,
        message: "Api is Stable now",
      });
    } catch (err) {
      next(err);
    }
  }
);

// custom error handler
app.use(customErrorHandler);

export default app;

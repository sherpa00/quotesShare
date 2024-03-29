import express, { Express } from 'express';
import { devMorganHttpLogger, prodMorganHttpLogger } from './utils/loggers/customLogger';
import ENV_VARIABLES from './configs/env_variables';
import customErrorHandler from './middlewares/errorHandler';
import RootRouter from './routes/indext';

// express app instance
const app: Express = express();

// json and body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);

// initialize http logging
if (ENV_VARIABLES.environment === 'development') {
  app.use(devMorganHttpLogger);
} else if (ENV_VARIABLES.environment === 'production') {
  app.use(prodMorganHttpLogger);
}

// routes
app.use(RootRouter);

// custom error handler
app.use(customErrorHandler);

export default app;

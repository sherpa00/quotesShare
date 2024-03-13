import morgan from "morgan";
import winston from "winston";

const { combine, colorize, timestamp, align, printf } = winston.format;

// custom logger
const logger = winston.createLogger({
  level: "info",
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SS A",
    }),
    winston.format.errors({ stack: true }),
    align(),
    printf((info) => `[${info.timestamp}]${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console()],
});

// morgan http stream to use in logger
const morganStream = {
  write: (text: String) => {
    logger.info(text);
  },
};

// dev http morgan logger init
export const devMorganHttpLogger = morgan("dev", {
  stream: morganStream,
});

export const prodMorganHttpLogger = morgan("combined", {
  stream: morganStream,
});

export default logger;

import { Router, IRouter, Request, Response, NextFunction } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

const apiCheckRouter: IRouter = Router();

// router to check if api is stable or not
apiCheckRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(StatusCodes.OK).json({
      success: true,
      status: ReasonPhrases.OK,
      message: "Api is stable",
    });
  } catch (err) {
    next(err);
  }
});

export { apiCheckRouter };

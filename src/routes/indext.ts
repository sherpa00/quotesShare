import { Router, IRouter } from "express";
import GuestsRouter from "./guests";

// main router
const RootRouter: IRouter = Router();

RootRouter.use("/api", GuestsRouter);

export default RootRouter;

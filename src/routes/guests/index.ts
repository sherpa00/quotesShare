import { Router, IRouter } from 'express';
import { apiCheckRouter } from './apiCheck.route';

// main routers for public/guest routes
const GuestsRouter: IRouter = Router();

GuestsRouter.use('/apiCheck', apiCheckRouter);

export default GuestsRouter;

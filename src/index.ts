import express, { Express, Response, Request } from "express";

// express app instance
const app: Express = express();

app.get("/apiCheck", async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: "Api is stable",
    });
  } catch (err) {
    console.log("Error while get the route /apiCheck");
    console.error(err);
  }
});

export default app;

import cors from "cors";
import dotenv from "dotenv";
import * as Colors from "colors.ts";
import cookieParser from "cookie-parser";
import express, { Application } from "express";
import { connect, connection } from "mongoose";
import { userRouter } from "./routers/userRouter";

dotenv.config();
Colors.enable();
const port = process.env.PORT!;
const app: Application = express();
const mongodb_url = process.env.MONGODB_URL!;

app.use(cookieParser());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/api", userRouter);

connection.once("open", () => {
  console.log(
    "MongoDB database connection successfully established.".green.bold
  );
});
connection.on("disconnected", () => {
  console.log("MongoDB database connection disconnected.".red.bold);
});
connection.on("error", (err) => {
  console.log(`MongoDB database connection has occurred ${err}.`.yellow.bold);
});
process.on("SIGINT", () => {
  connection.close(() => {
    console.log("MongoDB database connection was terminated".magenta.bold);
    process.exit(0);
  });
});
connect(mongodb_url).then(() =>
  app.listen(port, () => console.log(`http://localhost:${port}`.white.bold))
);

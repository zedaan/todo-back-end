import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectMongo } from "./config/MongoConfig";

// init express
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import { todoRouter } from "./Todo/TodoRoute";
app.use("/", todoRouter);

// connect to mongodb
connectMongo();

// start server
app.listen(4000, () => {
  console.log("server is running at port 4000");
});

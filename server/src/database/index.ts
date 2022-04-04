import { config } from "dotenv";
import mongoose from "mongoose";
import Api from "../utils/api";

config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const connection = mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Error on connect database: " + err.stack);
    return;
  });

export default connection;

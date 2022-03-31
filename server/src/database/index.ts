import { config } from "dotenv";
import mongoose from "mongoose";

config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const connection = mongoose.connect(process.env.CONNECTIONSTRING);

export default connection;

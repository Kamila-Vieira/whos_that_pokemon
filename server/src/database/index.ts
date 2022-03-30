import { config } from "dotenv";
import mongoose from "mongoose";

config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const dbConnection = mongoose.connect(process.env.CONNECTIONSTRING, {});

dbConnection.then((connection) => {
  connection.disconnect();
});

export default dbConnection;

import mongoose from "mongoose";

const connectdb = mongoose.connect(process.env.CONNECTIONSTRING, {});
console.log(process.env.CONNECTIONSTRING);

export default connectdb;

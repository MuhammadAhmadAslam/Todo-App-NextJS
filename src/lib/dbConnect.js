import mongoose from "mongoose";

export async function connectDB() {


  try {
    let dbConnection = await mongoose.connect(process.env.MONNGODB_URL);
  } catch (err) {
    console.log("err=>", err);
  }
}
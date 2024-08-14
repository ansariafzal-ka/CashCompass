import mongoose from "mongoose";

let isConnected = false;
export const connectDb = async () => {
  try {
    if (isConnected) {
      console.log("Already connected to mongodb");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "cash-compass",
    });
    console.log("Connected to mongodb");
    isConnected = true;
  } catch (error) {
    console.log("Error connecting to mongodb", error);
  }
};

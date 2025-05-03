import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbconnection = async () => {
  try {
    const uri: string =
      process.env.MONGO_URI ||
      (() => {
        throw new Error(
          "MONGO_URI is not defined in the environment variables"
        );
      })();
    const connection = await mongoose.connect(uri, {
      dbName: "Practice_Datas",
    });
    if (connection) {
      console.log("Database connected successfully");
    }
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

export default dbconnection;

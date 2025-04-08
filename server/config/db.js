import mongoose from "mongoose";

  // const MONGO_URI = "mongodb+srv://manish:manish%402005@resultwiz.oy14x.mongodb.net/resultwizDB?retryWrites=true&w=majority&appName=resultWIZ";

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Connection error", error);
  }
};

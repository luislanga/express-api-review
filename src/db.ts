import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(
      "mongodb://admin:pw@localhost:27017/node-review?authSource=admin"
    );
    console.log("MongoDB connected!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // todo: replace with retry
  }
};

export default db;

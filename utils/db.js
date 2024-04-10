import mongoose from "mongoose";

const connection = {};

export async function connectDb() {
  if (connection.isConnected) {
    console.log("Using Existing Connection");
    return;
  }

  try {
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Remove the useFindAndModify option
      // useFindAndModify: false,
    });
    console.log("MONGODB connected");

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("Error Connecting To MongoDB:", error);
  }
}

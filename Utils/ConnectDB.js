import mongoose from "mongoose";

export async function ConnectDB() {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("connected to DB");
      return;
    }
    await mongoose.connect(process.env.CONNECT_MONGODB);
  } catch (err) {
    console.log({ status: "faild connect to DB", message: err });
  }
}

import mongoose, { mongo } from "mongoose";


async function dbConnect(): Promise<boolean>{
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('>>>> MongoDB connected');
    return true;
  }
  catch (err) {
    console.log(err);
    return false;
  }
}

export default dbConnect;
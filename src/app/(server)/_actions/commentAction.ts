"use server"
import dbConnect from "../_libs/mongodb";
import CommentModel from "../_models/comment";


export async function getComments() {
  try {
    await dbConnect();

    const data = JSON.parse(JSON.stringify(await CommentModel.find().limit(10)));
    // throw new Error('This is an error');

    return { data };
  } catch (err: any) {
    return { errMsg: err.message };
  }
}
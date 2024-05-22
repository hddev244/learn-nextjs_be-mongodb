'use server'

import PostModel from "../src/server/models/postModel";
import dbConnect from "../src/server/lib/mongodb";

export async function getPosts() {
  try {
    await dbConnect();

    const data = JSON.parse(JSON.stringify(await PostModel.find()));

    // throw new Error('This is an error');

    return { data };
  } catch (err: any) {
    return { errMsg: err.message };
  }
}
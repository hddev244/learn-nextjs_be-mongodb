'use server'

import PostModel from "../models/postModel";



export async function getPosts() {
  try {
    const data = await PostModel.find({"customUrl": "bai-viet-dau-tien.html"});
    return { data };
  } catch (err: any) {
    return { errMsg: err.message };
  }
}
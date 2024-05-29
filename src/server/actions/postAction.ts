'use server'

import PostModel from "../models/postModel";



export async function getPosts() {
  try {
    const data = await PostModel.findOne({"customUrl": "xin-chao.html"});
    return { data };
  } catch (err: any) {
    return { errMsg: err.message };
  }
}

export async function getPostByUrl(url : string) {
  try {
    const data = await PostModel.findOne({"customUrl": url});
    return { data };
  } catch (err: any) {
    return { errMsg: err.message };
  }
}
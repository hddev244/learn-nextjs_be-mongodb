import mongoose, { Schema, mongo } from "mongoose";
import PostModel from "../models/postModel";
import { Post } from "../types/Post";
import AccountModel from "../models/AccountModel";


export class PostService {
    async createPost(post: Post) {
        post._id = new mongoose.Types.ObjectId();

        const author = await AccountModel.findById("66546ab05c31f92ec6fc4a1a")
        
        console.log(author);
        if (!author) {
            throw new Error('Author not found');
        }

        post.author = author._id;

        return await PostModel.create(post);
    }
    async getPostById(id: string) {
        return await PostModel.findById(id);
    }
    async getPosts() {
        return await PostModel.find();
    }
    async updatePost(id:string, post: Post) {
        return await PostModel.findByIdAndUpdate(id, post, { new: true })
    }
    async deletePost(id:string) {
        return await PostModel.findByIdAndDelete(id);
    }

    async getPostByCustomUrl(customUrl: string) {     
    
        return await PostModel.findOne()
                                .where('customUrl').equals(customUrl)
                                .populate({path :'author', select: 'name email'})
                                ;
    }
}
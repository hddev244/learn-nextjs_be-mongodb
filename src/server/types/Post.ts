import mongoose from "mongoose";

export type Post = {
    _id?: any;
    title: string;
    thumbnail: string;
    description: string;
    customUrl: string;
    content: string;
    author: mongoose.Types.ObjectId | null | undefined;
};
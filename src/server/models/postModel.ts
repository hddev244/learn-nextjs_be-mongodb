import mongoose, { Schema, model, models } from "mongoose";

const postSchema = new Schema({
   _id: Schema.Types.ObjectId,
   title: {
      type: String,
      required: true,
   },
   thumbnail: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   customUrl: {
      type: String,
      required: true,
      unique: true,
   },
   content: {
      type: String,
      required: true,
   },
   author: {
      type: Schema.Types.ObjectId,
      ref: "Account",
   },
}, { timestamps: true });

const PostModel = models.Post || model("Post", postSchema);

export default PostModel;


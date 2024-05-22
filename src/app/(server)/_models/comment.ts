import mongoose, { Schema, model, models } from "mongoose";

const commentSchema = new Schema({
    _id : {
        type: String,
        required: false
    },
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    movie_id : {
        type: String,
        required: true
    },
    text : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date
    }
}, { timestamps: true });

const CommentModel = mongoose.model('Comment', commentSchema);


export default CommentModel;
import CommentModel from "../_models/comment";
import dbConnect from "../_libs/mongodb";
import Comment from "../types/Comment";
import ResponseType from "../types/ResponseType";


export default class CommentService{
    async getComments(): Promise<ResponseType> {
        try {
            // await dbConnect();
            return CommentModel.find().limit(10)
            .then(data => {
                return {
                    code: 200,
                    msg: "Comments fetched successfully",
                    data: data
                };
            })
            .catch(err => {
                return {
                    errMsg: err.message,
                    code: 500,
                } as ResponseType;
            });
        } catch (err: any) {
                return {
                    errMsg: err.message, 
                    code: 500,
                } as ResponseType;
        }

    }
    async getComment(id: string): Promise<Comment> {
        throw new Error("Method not implemented.");
    }
    async createComment(comment: Comment): Promise<string> {
        throw new Error("Method not implemented.");
    }
    async deleteComment(id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    async updateComment(comment: Comment): Promise<string> {
        throw new Error("Method not implemented.");
    }
}

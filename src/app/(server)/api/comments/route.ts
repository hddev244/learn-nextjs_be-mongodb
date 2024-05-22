import { NextResponse } from "next/server";
import dbConnect from "../../_libs/mongodb";
import CommentModel from "../../_models/comment";

export async function GET(){
    try {
        await dbConnect();
        const data = JSON.parse(JSON.stringify(await CommentModel.find().limit(10)));
        return NextResponse.json(data);
      } catch (err: any) {
        return { errMsg: err.message };
      }
}

export async function POST(req: Request){
    const dt = await req.json();
    console.log(dt);
    try {
        await dbConnect();
        const res = await CommentModel.insertMany(dt);
        return NextResponse.json(res);
      } catch (err: any) {
        return { errMsg: err.message };
      }
}


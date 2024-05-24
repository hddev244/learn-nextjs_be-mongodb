import { NextResponse } from "next/server";
import dbConnect from "../../_libs/mongodb";
import CommentModel from "../../_models/comment";
import CommentService from "../../Service/CommentService";

const service = new CommentService();

export async function GET(): Promise<NextResponse>{
  return NextResponse.json(await service.getComments());
}

// export async function POST(req: Request){
//     const dt = await req.json();
//     try {
//         await dbConnect();
//         const res = await CommentModel.create(dt);
//         return NextResponse.json(res);
//       } catch (err: any) {
//         return { errMsg: err.message };
//       }
// }


import { PostService } from "@/server/Service/PostService";
import { Post } from "@/server/types/Post";
import { NextResponse } from "next/server";

const service = new PostService();

export async function GET(): Promise<NextResponse> {
    try {
        const res = await service.getPosts();

        return NextResponse.json({ message: 'Posts fetched', data: res }, { status: 200 });
    }
    catch (err: any) {
        return NextResponse.json({ errMsg: err.message }, { status: 500 });
    }
}

export async function POST(req: Request): Promise<NextResponse> {
    const body:Post = await req.json();
    try {
        const res = await service.createPost(body);
        return NextResponse.json({ message: 'Post created', data: res }, { status: 201 });
    }
    catch (err: any) {
        return NextResponse.json({ errMsg: err.message }, { status: 400 });
    }
}
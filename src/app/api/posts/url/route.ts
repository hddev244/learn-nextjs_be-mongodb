import { PostService } from "@/(server)/Service/PostService";
import { NextRequest, NextResponse } from "next/server";

const service = new PostService();

export async function GET(req: NextRequest) : Promise<NextResponse> {
    const {searchParams} = new URL(req.url);
    
    const customUrl = searchParams.get('l');

    if (!customUrl) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const post = await service.getPostByCustomUrl(customUrl);

    return NextResponse.json({ message: 'Posts fetched',data:post}, { status: 200 });
}
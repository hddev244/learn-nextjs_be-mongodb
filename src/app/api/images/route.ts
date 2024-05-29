import formidable from "formidable";
import path from "path";
import fs, { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { url } from "inspector";

export const config = {
  api: {
    bodyParser: false,
  },
};
 export async function POST(req:NextRequest): Promise<NextResponse> {
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/images"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/images"));
  }

  const data = await req.formData();
  const file: File | null = data.get("file") as File;

  if (!file) {
    return NextResponse.json({ status: 400, body: "No file found" });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const fileName =  Date.now().toString()+"-"+ file.name;

  const p = path.join(process.cwd() + "/public", "/images", fileName);
  await writeFile(p, buffer);

  const serverUrl = process.env.SERVER_URL || "http://localhost:3000";

  return NextResponse.json({ status: 200, body:serverUrl + "/images/" + fileName });   
};


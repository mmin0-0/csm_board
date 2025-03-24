import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) => {
  try {
    const db = (await connectDB).db('csm_board');
    const formData = await req.formData();

    const now = new Date();
    const formattedDate = now.getFullYear() + '-' + 
    String(now.getMonth() + 1).padStart(2, '0') + '-' + 
    String(now.getDate()).padStart(2, '0') + ' ' + 
    String(now.getHours()).padStart(2, '0') + ':' + 
    String(now.getMinutes()).padStart(2, '0') + ':' + 
    String(now.getSeconds()).padStart(2, '0');

    const author = formData.get("author") as string;
    const title = (formData.get("title") as string)?.trim();
    const content = (formData.get("content") as string).trim();
    const postType = 'general';
    const createAt = formattedDate as string;

    if (!title || !content) {
      return NextResponse.json({error: '제목과 내용을 입력해주세요.'}, {status: 400});
    }

    const post = { author, title, content, postType, createAt };
    await db.collection('post').insertOne(post);
    return NextResponse.redirect(new URL('/board', req.url), 302);
  } catch(error){
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
};

import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) => {
  try{
    const db = (await connectDB).db('csm_board');
    const formData = await req.formData();

    const _id = formData.get('_id') as string;
    const title = (formData.get('title') as string)?.trim();
    const content = (formData.get('content') as string)?.trim();

    if (!title || !content) {
      return NextResponse.json({error: '🚨제목과 내용을 입력해주세요.'}, {status: 400});
    }
    
    const post = {title, content};
    await db.collection('post').updateOne(
      { _id: new ObjectId(_id) },
      { $set: post }
    );
    return NextResponse.redirect(new URL('/board', req.url), 302);
  } catch(error){
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
};

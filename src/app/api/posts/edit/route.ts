import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) => {
  try{
    const formData = await req.formData();
    const _id = formData.get('_id')?.toString();
    const title = (formData.get("title") as string)?.trim();
    const content = (formData.get("content") as string).trim();

    if(!title || !content){
      return NextResponse.json({ message: '제목과 내용을 입력해주세요.' }, { status: 400 });
    }

    const db = (await connectDB).db('csm_board');
    const target = await db.collection('post').findOne({_id: new ObjectId(_id)});
    if(!target){
      return NextResponse.json({ message: '게시글을 찾을 수 없습니다.' }, { status: 404 });
    }

    const data = {title: title, content: content};
    await db.collection('post').updateOne(
      {_id: new ObjectId(_id)},
      {$set: data}
    );

    return NextResponse.redirect(new URL('/board', req.url), 302);
  } catch(error){
    console.error(error);
    return NextResponse.json({ error: '서버 오류 발생' }, { status: 500 });
  }
};
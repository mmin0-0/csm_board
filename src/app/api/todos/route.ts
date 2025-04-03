import { authOptions } from "@/utils/authOptions";
import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: '로그인 후 이용 가능합니다:)' }, { status: 403 });
  }
  try{
    const db = (await connectDB).db('csm_board');
    const formData = await req.formData();

    const author = session.user.email;
    const title = (formData.get('title') as string)?.trim();
    const date = (formData.get('date') as string)?.trim();

    if (!title || !date) {
      return NextResponse.json({error: '🚨제목과 날짜를 입력해주세요.'}, {status: 400});
    }

    const todo = { author, title, date };
    await db.collection('todo').insertOne(todo);

    return NextResponse.redirect(new URL('/home', req.url), 302);
  } catch(error){
    console.error('Error occurred:', error);
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
};
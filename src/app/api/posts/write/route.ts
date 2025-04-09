import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/utils/authOptions";

export const POST = async(req: NextRequest) => {
  const session = await getServerSession(authOptions);
  if(!session){
    return NextResponse.json({error: '로그인 후 이용 가능합니다:)'}, {status: 403});
  }

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
    
    const author = session.user?.name;
    const authorEmail = session.user?.email;
    const title = (formData.get("title") as string)?.trim();
    const content = (formData.get("content") as string)?.trim();
    const postType = 'general';
    const createAt = formattedDate;
    const likeUser = [] as string[];
    const likeCount = 0 as number;

    if (!title || !content) {
      return NextResponse.json({error: '🚨제목과 내용을 입력해주세요.'}, {status: 400});
    }

    const post = { author, authorEmail, title, content, postType, createAt, likeUser, likeCount };
    await db.collection('post').insertOne(post);
    
    return NextResponse.redirect(new URL('/board', req.url), 302);
  } catch(error){
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
};

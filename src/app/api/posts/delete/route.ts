import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/utils/authOptions";

export const DELETE = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  if(!session){
    return NextResponse.json({error: '로그인 후 이용 가능합니다:)'}, {status: 403});
  }

  try {
    const db = (await connectDB).db('csm_board');
    const body = await req.text();

    const objectId = new ObjectId(body);
    const target = await db.collection('post').findOne({ _id: objectId });

    const userRole = session.user?.role ?? 'user';
    if(target?.authorEmail !== session.user?.email && userRole !== 'admin'){
      return NextResponse.json({error: '작성자 또는 관리자만 삭제 가능합니다.'}, {status: 403});
    }

    await db.collection('post').deleteOne({ _id: objectId });
    return NextResponse.redirect(new URL('/board', req.url), 302);
  } catch (error) {
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
};
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

  try{
    const db = (await connectDB).db('csm_board');
    const { _id } = await req.json();
    const objectId = new ObjectId(_id);
    const target = await db.collection('todo').findOne({ _id: objectId });

    if (!target) {
      return NextResponse.json({ error: '삭제할 일정이 없습니다.' }, { status: 404 });
    }

    if (target.author === 'admin' && session.user.role === 'user') {
      return NextResponse.json({ error: '관리자만 삭제 할 수 있습니다.' }, { status: 403 });
    }

    await db.collection('todo').deleteOne({ _id: objectId });
    return NextResponse.redirect(new URL('/home', req.url), 302);
  } catch (error) {
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
};
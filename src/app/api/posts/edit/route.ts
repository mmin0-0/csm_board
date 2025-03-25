import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: '로그인 후 이용 가능합니다:)' }, { status: 403 });
  }
  try {
    const db = (await connectDB).db('csm_board');
    const formData = await req.formData();

    const body = await req.text();
    const objectId = new ObjectId(body);
    const target = await db.collection('post').findOne({ _id: objectId });

    const _id = formData.get('_id') as string;
    const title = (formData.get('title') as string)?.trim();
    const content = (formData.get('content') as string)?.trim();

    if(target?.author !== session.user?.email){
      return NextResponse.json({error: '작성자 또는 관리자만 삭제 가능합니다.'}, {status: 403});
    }

    if (!title || !content) {
      return NextResponse.json({ error: '🚨제목과 내용을 입력해주세요.' }, { status: 400 });
    }

    const post = { title, content };
    await db.collection('post').updateOne(
      { _id: new ObjectId(_id) },
      { $set: post }
    );
    return NextResponse.redirect(new URL('/board', req.url), 302);
  } catch (error) {
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
};

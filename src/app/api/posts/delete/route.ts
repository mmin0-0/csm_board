import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest) => {
  try {
    const db = (await connectDB).db('csm_board');
    const body = await req.text();
    if (!ObjectId.isValid(body)) {
      return NextResponse.json({ error: '잘못된 ID 형식입니다.' }, { status: 400 });
    }

    const objectId = new ObjectId(body);
    const target = await db.collection('post').findOne({ _id: objectId });

    if (!target) {
      return NextResponse.json({ error: '게시글이 존재하지 않습니다.' }, { status: 404 });
    }

    await db.collection('post').deleteOne({ _id: objectId });
    return NextResponse.redirect(new URL('/board', req.url), 302);
  } catch (error) {
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
};
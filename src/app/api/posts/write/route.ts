import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) => {
  try {
    const db = (await connectDB).db('csm_board');
    const body = await req.json();
    const posts = await db.collection('post').insertOne(body);
    const count = await db.collection('post').countDocuments();

    body.idx = count + 1;

    return NextResponse.redirect(new URL('/board', req.url), 302);
  } catch(error){
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
};
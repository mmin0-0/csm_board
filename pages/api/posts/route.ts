import { connectDB } from '@/util/database';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const db = (await connectDB).db('csm_board');
    const posts = await db.collection('post').find().toArray();

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('❌ API 요청 실패:', error);
    return NextResponse.json({ error: 'Unable to fetch data' }, { status: 500 });
  }
};
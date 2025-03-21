import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async() => {
  try {
    const db = (await connectDB).db('csm_board');
    const posts = await db.collection('post').find().toArray();
    return NextResponse.json(posts, {status: 200});
  } catch(error){
    return NextResponse.json({ error: 'Unable to fetch data' }, { status: 500 });
  }
};
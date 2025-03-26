import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest) => {
  const queryParams = req.nextUrl.searchParams;
  const id = queryParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }
  
  try {
    const db = (await connectDB).db('csm_board');
    const comment = await db.collection('comment').find({ parent: new ObjectId(id) }).toArray(); 
    return NextResponse.json(comment, {status: 200});
  } catch(error){
    return NextResponse.json({ error: 'Unable to fetch data' }, { status: 500 });
  }
};
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

type Props = {params: {id: string}};
export const GET = async(req: NextRequest, {params}:Props) => {
  try {
    const db = (await connectDB).db('csm_board');
    const posts = await db.collection('post').findOne({
      _id: new ObjectId(params.id)
    });

    return NextResponse.json(posts, {status: 200});
  } catch(error){
    return NextResponse.json({error: '게시글 조회 실패'}, {status: 500})
  }
};
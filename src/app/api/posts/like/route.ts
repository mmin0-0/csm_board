import { authOptions } from "@/utils/authOptions";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  try {
    if (!session || session === null) {
      return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 400 });
    }

    const db = (await connectDB).db('csm_board');
    const body = await req.json();

    const isLike = await db.collection('postLike').findOne({ likeUser: session.user.name });
    if (isLike) {
      return NextResponse.json({ error: '이미 좋아요를 누른 게시글 입니다.' }, { status: 400 });
    }

    const post = await db.collection('post').updateOne(
      { _id: new ObjectId(body.postId) },
      { $inc: { postLikeCount: +1 } }
    );

    const newPost = await db.collection('post').updateOne(
      { _id: new ObjectId(body.postId) },
      { $set: post }
    );
    const liked = await db.collection('postLike').insertOne({
      likeUser: body.userName,
      postId: new ObjectId(body.postId),
    });

    return NextResponse.json(liked, { status: 200 });
  } catch (error) {
    console.error("like Error:", error);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
};
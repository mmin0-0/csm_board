import { authOptions } from "@/utils/authOptions";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  try {
    const db = (await connectDB).db('csm_board');
    const body = await req.json();

    const save = {
      likeUser: session?.user.email, // 좋아요 누른 유저계정
      postId: new ObjectId(body._id) // 게시글의 id
    };

    const likedPost = await db.collection('post').findOne({_id: new ObjectId(save.postId)});
    const arrUser = {likeUser: session?.user.email}; // 현재 좋아요 누른 유저의 이메일

    // post likeCount 증가
    const post = await db.collection('post').updateOne( 
      { _id: new ObjectId(likedPost?._id) },
      { $inc: {likeCount: 1} }
    );

    // post likeUser 추가
    await db.collection('post').updateOne(
      {_id: new ObjectId(likedPost?._id)},
      {$push: arrUser}
    );

    // postLike 업데이트
    const postLike = await db.collection('postLike').updateOne(
      {postId: new ObjectId(body._id)},
      {$addToSet: {likeUser: session?.user.email}},
      {upsert: true} // 존재하지 않으면 새로 생성
    );

    // post 최신데이터 반환
    const updatedPost = await db.collection('post').findOne({_id: new ObjectId(body._id)});
    return NextResponse.json({
      likeUser: updatedPost?.likeUser || [],
      likeCount: updatedPost?.likeCount || 0,
    });

  } catch (error) {
    console.error("like Error:", error);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
};
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
    const { _id, likeUser } = body;

    const post = await db.collection('post').findOne({_id: new ObjectId(_id)});
    if (!post) {
      return NextResponse.json({ error: '게시글을 찾을 수 없습니다.' }, { status: 404 });
    }

    // user & count 추가
    const isLiked = post.likeUser.includes(likeUser);
    if(!isLiked){
      await db.collection('post').updateOne(
        {_id: new ObjectId(_id)},
        {$addToSet: {likeUser: likeUser}, $inc: {likeCount: 1}}
      );
    }
    
    // post 최신데이터 반환
    const updatedPost = await db.collection('post').findOne({_id: new ObjectId(_id)});

    // postLike 업데이트
    const postLike = await db.collection('postLike').updateOne(
      {postId: new ObjectId(_id)},
      {$addToSet: {likeUser: likeUser}},
      {upsert: true} // 존재하지 않으면 새로 생성
    );

    return NextResponse.json({
      likeUser: updatedPost?.likeUser || [],
      likeCount: updatedPost?.likeCount || 0,
    });
  } catch (error) {
    console.error("like Error:", error);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
};
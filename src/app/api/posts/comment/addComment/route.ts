import { Comment as IComment } from "@/model/Comment";
import { authOptions } from "@/utils/authOptions";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  try {
    const body = await req.json();

    const now = new Date();
    const koreaTime = new Date(now.setHours(now.getHours() + 9));
    const formattedDate = koreaTime.getFullYear() + '-' +
      String(koreaTime.getMonth() + 1).padStart(2, '0') + '-' +
      String(koreaTime.getDate()).padStart(2, '0') + ' ' +
      String(koreaTime.getHours()).padStart(2, '0') + ':' +
      String(koreaTime.getMinutes()).padStart(2, '0') + ':' +
      String(koreaTime.getSeconds()).padStart(2, '0');
    body.createAt = formattedDate;

    const commentInfo:IComment = {
      content: body.comment,
      parent: new ObjectId(body._id),
      author: session?.user.name,
      email: session?.user.email,
      createAt: formattedDate,
    };

    if (!commentInfo.content) {
      return NextResponse.json({ error: '내용을 입력해주세요.' }, { status: 400 });
    }

    const db = (await connectDB).db('csm_board');
    const result = await db.collection('comment').insertOne(commentInfo);
    commentInfo._id = new ObjectId(result.insertedId); 

    return NextResponse.json(commentInfo, { status: 200 });
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({message: error}, { status: 500 });
  }
};
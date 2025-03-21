import { TitWrap, Typography } from "@/app/_component/Typography";
import { connectDB } from "@/utils/database";
import * as style from '@/app/styles/pages/board.css';
import { ContWrap } from "@/app/styles/component/layout.css";
import BoardTable from "@/app/board/_component/BoardTable";

export default async function Board (){
  const db = (await connectDB).db('csm_board');
  const result = await db.collection('post').find().toArray();

  const posts = result.map(post => ({
    _id: post._id.toString(),
    title: post.title,
    content: post.content,
    postType: post.postType,
  }));

  return (
    <main>
      <TitWrap>
        <Typography as="h4">게시판 리스트</Typography>
      </TitWrap>
      <div className={ContWrap}>
        <BoardTable posts={posts} />
      </div>
    </main>
  )
}
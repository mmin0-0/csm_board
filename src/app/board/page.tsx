import { TitWrap, Typography } from "@/app/_component/Typography";
import { connectDB } from "@/utils/database";
import { TitleWrap, ContWrap } from "@/app/styles/component/layout.css";
import BoardListTable from "@/app/board/_component/BoardListTable";
import WriteLinkButton from "@/app/board/_component/WriteLinkButton";

export default async function Board (){
  const db = (await connectDB).db('csm_board');
  const result = await db.collection('post').find().toArray();

  const posts = result.map(post => ({
    _id: post._id.toString(),
    author: post.author,
    title: post.title,
    content: post.content,
    postType: post.postType,
    createAt: post.createAt,
  }));

  return (
    <main>
      <TitWrap className={TitleWrap}>
        <Typography as="h4" weight="bold" size="xlarge">게시판 리스트</Typography>
        <WriteLinkButton />
      </TitWrap>
      <div className={ContWrap}>
        <BoardListTable posts={posts} />
      </div>
    </main>
  )
}
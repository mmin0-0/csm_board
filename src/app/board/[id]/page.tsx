import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import * as style from '@/app/styles/pages/board.css';
import { Fragment } from "react";
import { TitWrap, Typography } from "@/app/_component/Typography";
import { ContWrap, TableWrap, TitleWrap } from "@/app/styles/component/layout.css";
import BoardTable from '@/app/board/[id]/_component/BoardTable';
import Comment from '@/app/board/[id]/_component/Comment';

export default async function Detail({ params }: any) {
  const db = (await connectDB).db('csm_board');
  const post = await db.collection('post').findOne({
    _id: new ObjectId(params.id)
  });

  if (!post) {
    return <main>게시글을 찾을 수 없습니다.</main>
  }

  const convertedPost = {
    _id: post._id.toString(),
    title: post.title,
    content: post.content,
    postType: post.postType,
  };

  return (
    <main>
      <TitWrap className={TitleWrap}>
        <Typography as="h4" weight="bold" size="xlarge">게시판 리스트</Typography>
      </TitWrap>
      <div className={ContWrap}>
        <div className={TableWrap}>
          <BoardTable post={convertedPost} />
        </div>
        <div className={style.BoardCont}>
          <Typography lineHeight="medium">
            {convertedPost.content.split('\n').map((line:string, idx:number) => (
              <Fragment key={idx}>
                {line}<br />
              </Fragment>
            ))}
          </Typography>
        </div>
        <Comment />
      </div>
    </main>
  )
}
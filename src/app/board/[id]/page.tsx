import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import * as style from '@/app/styles/pages/board.css';
import { Fragment } from "react";
import { TitWrap, Typography } from "@/app/_component/Typography";
import { ContWrap, TableWrap, TitleWrap } from "@/app/styles/component/layout.css";
import BoardTable from '@/app/board/[id]/_component/BoardTable';
import Comment from '@/app/board/[id]/_component/Comment';
import PostActions from "@/app/board/[id]/_component/PostActions";

type Props = { params: { id: string } };
export default async function Detail(props:Props) {
  const db = (await connectDB).db('csm_board');
  const data = await db.collection('post').findOne({
    _id: new ObjectId(props.params.id)
  });

  if (!data) {
    return <main>게시글을 찾을 수 없습니다.</main>
  }

  const post = {
    _id: data._id,
    author: data.author,
    title: data.title,
    content: data.content,
    file: data.file,
    postType: data.postType,
    createAt: data.createAt,
  };

  return (
    <main>
      <TitWrap className={TitleWrap}>
        <Typography as="h4" weight="bold" size="xlarge">게시글 조회하기</Typography>
        <PostActions post={post} />
      </TitWrap>
      <div className={ContWrap}>
        <div className={TableWrap}>
          <BoardTable post={post} />
        </div>
        <div className={style.BoardCont}>
          <Typography lineHeight="medium">
            {post.content.split('\n').map((line:string, idx:number) => (
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
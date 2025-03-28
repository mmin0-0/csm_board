import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import * as style from '@/app/styles/pages/board.css';
import { Fragment } from "react";
import { TitWrap, Typography } from "@/app/_component/Typography";
import { ContWrap, TableWrap, TitleWrap } from "@/app/styles/component/layout.css";
import BoardTable from '@/app/board/[id]/_component/BoardTable';
import Comment from '@/app/board/[id]/_component/Comment';
import PostActions from "@/app/board/[id]/_component/PostActions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { ButtonWrap } from "@/app/_component/Button";
import PostLike from "./_component/PostLike";

type Props = { params: { id: string } };
export default async function Detail(props:Props) {
  const session = await getServerSession(authOptions);
  const db = (await connectDB).db('csm_board');
  const data = await db.collection('post').findOne({
    _id: new ObjectId(props.params.id)
  });

  // let liked:boolean = false;
  // if(session && data){
  //   liked = data.likeUser.includes(session.user.email);
  // }
  
  // 날짜 기준으로 정렬(내림차순)
  const posts = await db.collection('post').find().sort({createAt: 1}).toArray();
  const postIndex = posts.findIndex((post) => post._id.toString() === data?._id.toString()) + 1;

  if (!data) {
    return <main>게시글을 찾을 수 없습니다.</main>
  }

  const post = {
    _id: data._id,
    idx: postIndex,
    author: data.author,
    title: data.title,
    content: data.content,
    file: data.file,
    postType: data.postType,
    createAt: data.createAt,
    likeUser: data.likeUser,
    likeCount: data.likeCount,
  };

  return (
    <main>
      <TitWrap className={TitleWrap}>
        <Typography as="h4" weight="bold" size="xlarge">게시글 조회하기</Typography>
        <ButtonWrap>
          <PostLike post={post} session={session} />
          <PostActions post={post} session={session} />
        </ButtonWrap>
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
        <Comment _id={post._id.toString()} />
      </div>
    </main>
  )
}
'use client';
import { useState } from "react";
import { Comment as IComment } from "@/model/Comment";
import * as style from '@/app/styles/pages/board.css';
import { Textarea } from "@/app/_component/Input";
import { Typography } from "@/app/_component/Typography";
import { Button } from "@/app/_component/Button";
import { hide } from "@/app/styles/globals.css";

export default function Comment() {
  const [comment, setComment] = useState<string>('');
  const [data, setData] = useState<IComment[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setComment(e.target.value) };

  return (
    <div className={style.CommentWrap}>
      <Typography as="strong" weight="semiBold" className={style.CommentTit}>
        댓글 <Typography as="span" color="white" className={style.CommentNum}>2</Typography>
      </Typography>
      <form className={style.CommentForm}>
        <Textarea
          children="댓글작성"
          className={hide}
          id="comment"
          name="comment"
          onChange={onChange}
        />
        <Button color="secondary">등록</Button>
      </form>
      <div className={style.CommentList}>
        <div className={style.CommentItem}>
          <div className={style.CommentUserInfo}>
            <Typography as="strong" weight="semiBold">관리자</Typography>
            <Typography color="gray">00-00-00</Typography>
          </div>
          <div className={style.CommentCont}>
            <Typography lineHeight="regular">댓글 내용 입니다.</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
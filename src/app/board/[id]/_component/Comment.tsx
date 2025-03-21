'use client';
import { useState } from "react";
import { Comment as IComment } from "@/model/Comment";
import * as style from '@/app/styles/pages/board.css';
import { Textarea } from "@/app/_component/Input";
import { Typography } from "@/app/_component/Typography";
import { Button } from "@/app/_component/Button";

export default function Comment() {
  const [comment, setComment] = useState<string>('');
  const [data, setData] = useState<IComment[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setComment(e.target.value) };

  return (
    <div className={style.CommentWrap}>
      <div className={style.CommentTit}>
        <Typography as="strong">
          댓글 <Typography as="span">2</Typography>
        </Typography>
      </div>
      <div className={style.CommentForm}>
        <form>
          <Textarea
            children="댓글작성"
            className="hide"
            id="comment"
            name="comment"
            onChange={onChange}
          />
          <Button>등록</Button>
        </form>
      </div>
      <div className={style.CommentList}>
        <div className={style.CommentUserInfo}>
          <Typography as="strong">관리자</Typography>
          <Typography>00-00-00</Typography>
        </div>
        <div className={style.CommentCont}>
          <Typography>댓글 내용</Typography>
        </div>
      </div>
    </div>
  )
}
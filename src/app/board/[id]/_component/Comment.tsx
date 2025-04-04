'use client';
import { useEffect, useState } from "react";
import { Comment as IComment } from "@/model/Comment";
import * as style from '@/app/styles/pages/board.css';
import { Textarea } from "@/app/_component/Input";
import { Typography } from "@/app/_component/Typography";
import { Button } from "@/app/_component/Button";
import { hide } from "@/app/styles/globals.css";
import { useRouter } from "next/navigation";

type Props = { _id: string };
export default function Comment({ _id }: Props) {
  const router = useRouter();
  const [comment, setComment] = useState<string>('');
  const [data, setData] = useState<IComment[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setComment(e.target.value) };

  useEffect(() => {
    fetch(`/api/posts/comment?id=${_id}`, { method: 'GET' })
      .then(res => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Failed to fetch comments:', error);
      });
  }, [_id]);

  const addComment = async () => {
    try {
      const res = await fetch('/api/posts/comment/addComment', {
        method: 'POST',
        body: JSON.stringify({
          comment: comment,
          _id: _id,
        })
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.error || '댓글 등록에 실패했습니다.');
        return;
      }

      const newComment = await res.json();
      setData(prev => [newComment, ...prev]);
      setTimeout(() => {
        setComment('');
      }, 0);  
    } catch (error) {
      alert('네트워크 오류 발생');
    }
  };

  return (
    <div className={style.CommentWrap}>
      <Typography as="strong" weight="semiBold" className={style.CommentTit}>
        댓글 <Typography as="span" size="small" className={style.CommentNum}>{data.length}</Typography>
      </Typography>
      <div className={style.CommentForm}>
        <Textarea
          children="댓글작성"
          className={hide}
          id="comment"
          name="comment"
          onChange={onChange}
        />
        <Button onClick={addComment}>등록</Button>
      </div>
      <div className={style.CommentList}>
        {data.length > 0 ? data.map((comment, idx) => (
          <div className={style.CommentItem} key={idx}>
            <div className={style.CommentUserInfo}>
              <Typography as="strong" weight="semiBold">
                {comment.author}
                <Typography as="span" color="gray" size="small" className={style.AuthorEmail}>@{comment.email}</Typography>
              </Typography>
              <Typography color="gray">{comment.createAt}</Typography>
            </div>
            <div className={style.CommentCont}>
              <Typography lineHeight="regular">{comment.content}</Typography>
            </div>
          </div>
        )) : <Typography>등록된 댓글이 없습니다.</Typography>}
      </div>
    </div>
  )
}
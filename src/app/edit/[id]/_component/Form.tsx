'use client';
import clsx from "clsx";
import { Button, ButtonWrap } from "@/app/_component/Button";
import { InputLabel, Essential, FormGroup, formControls } from "@/app/styles/component/input.css";
import { Textarea, TextInput, FileInput } from "@/app/_component/Input";
import { Post as IPost } from "@/model/Post";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Typography } from "@/app/_component/Typography";

type Props = { post: IPost };
export default function Form({ post }: Props) {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    const data = new FormData(e.currentTarget);
    setFormData(data);
  };

  useEffect(() => {
    const submitData = async () => {
      if (formData) {
        const response = await fetch('/api/posts/edit', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          const data = await response.json();
          setMessage(data.error);
        } else {
          window.location.href = '/board';
        }
      }
    };

    if (formData) {
      submitData();
    }
  }, [formData]);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/board');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={FormGroup}>
        <input type="hidden" name="_id" defaultValue={post._id.toString()} />
        <TextInput id="author" name="author" children="작성자" className={InputLabel} defaultValue="작성자" disabled={true} />
        <TextInput
          id="title"
          name="title"
          children="제목"
          className={clsx(InputLabel, Essential)}
          required={true}
          defaultValue={post.title}
          placeholder="제목을 입력해주세요."
        />
        <Textarea
          id="content"
          name="content"
          children="글 내용"
          className={clsx(InputLabel, Essential)}
          required={true}
          defaultValue={post.content}
          placeholder="내용을 입력해주세요."
        />
        <FileInput
          id="file"
          children="이미지 파일 첨부"
          className={InputLabel}
          required={false}
        />
      </div>
      <div className={formControls}>
        {message && <Typography weight="semiBold" color="error">{message}</Typography>}
        <ButtonWrap>
          <Button type="submit">수정하기</Button>
          <Button color="secondary" onClick={onClick}>취소</Button>
        </ButtonWrap>
      </div>
    </form>
  )
}
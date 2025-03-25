'use client';
import clsx from "clsx";
import { Button, ButtonWrap } from "@/app/_component/Button";
import { InputLabel, Essential, FormGroup, formControls } from "@/app/styles/component/input.css";
import { Textarea, TextInput, FileInput } from "@/app/_component/Input";
import { useEffect, useState } from "react";
import { Typography } from "@/app/_component/Typography";
import { useRouter } from "next/navigation";

export default function Form() {
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
        const response = await fetch('/api/posts/write', {
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
        <TextInput id="author" name="author" children="작성자" className={InputLabel} required={true} disabled={true} placeholder="작성자" />
        <TextInput id="title" name="title" children="제목" className={clsx(InputLabel, Essential)} required={true} placeholder="제목을 입력해주세요." />
        <Textarea id="content" name="content" children="글 내용" className={clsx(InputLabel, Essential)} required={true} placeholder="내용을 입력해주세요." />
        <FileInput id="file" children="이미지 파일 첨부" className={InputLabel} required={false} />
      </div>
      <div className={formControls}>
        {message && <Typography weight="semiBold" color="error">{message}</Typography>}
        <ButtonWrap>
          <Button type="submit">등록하기</Button>
          <Button color="secondary" onClick={onClick}>취소</Button>
        </ButtonWrap>
      </div>
    </form>
  )
}
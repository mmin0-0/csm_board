'use client';
import clsx from "clsx";
import { Button, ButtonWrap } from "@/app/_component/Button";
import { InputLabel, Essential, FormGroup } from "@/app/styles/component/input.css";
import { Textarea, TextInput, FileInput } from "@/app/_component/Input";
import { hide } from "@/app/styles/globals.css";
import { Post as IPost } from "@/model/Post";
import { useRouter } from "next/navigation";

type Props = { post: IPost };
export default function Form({post}:Props) {
  const router = useRouter();
  const onClick = () => {router.push('/board')};

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append('_id', post._id);
    formData.append('title', post.title);
    formData.append('content', post.content);

    const response = await fetch('/api/posts/edit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    if(response.ok){
      console.log('게시글 수정 성공', result);
    } else{
      console.log('에러발생생', result);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={FormGroup}>
        <TextInput id="author" name="author" children="작성자" className={InputLabel} value="작성자" disabled={true} />
        <TextInput id="title" name="title" children="제목" className={clsx(InputLabel, Essential)} required={true} defaultValue={post.title} placeholder="제목을 입력해주세요." />
        <Textarea id="content" name="content" children="글 내용" className={clsx(InputLabel, Essential)} required={true} defaultValue={post.content} placeholder="내용을 입력해주세요." />
        <FileInput id="file" children="이미지 파일 첨부" className={InputLabel} required={false} />
        <input name="_id" className={hide} defaultValue={post._id.toString()} />
      </div>
      <ButtonWrap>
        <Button type="submit">수정하기</Button>
        <Button color="secondary" onClick={onClick}>취소</Button>
      </ButtonWrap>
    </form>
  )
}
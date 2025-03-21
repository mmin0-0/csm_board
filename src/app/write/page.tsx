'use client';
import { Textarea, TextInput, FileInput } from "@/app/_component/Input";
import { TitWrap, Typography } from "@/app/_component/Typography";
import { ContWrap, TitleWrap } from "@/app/styles/component/layout.css";
import { InputLabel, Essential, FormGroup } from "@/app/styles/component/input.css";
import clsx from "clsx";

export default async function Write() {
  // export const formWrap = [
  //   {
  //     id: 'author',
  //     title: '작성자',
  //     type: 'text',
  //     state: 'disabled',
  //     placeholder: '작성자'
  //   },{
  //     id: 'title',
  //     title: '제목',
  //     type: 'text',
  //     state: 'required',
  //     placeholder: '제목을 입력해주세요.'
  //   },{
  //     id: 'content',
  //     title: '내용',
  //     type: 'textarea',
  //     state: 'required',
  //     placeholder: '내용을 입력해주세요.'
  //   },{
  //     id: 'file',
  //     title: '이미지 파일 첨부',
  //     type: 'file',
  //     state: '',
  //     placeholder: ''
  //   }
  // ];
  return (
    <main>
      <TitWrap className={TitleWrap}>
        <Typography as="h4" weight="bold" size="xlarge">게시글 작성하기</Typography>
      </TitWrap>
      <div className={ContWrap}>
        <form>
          <div className={FormGroup}>
            <TextInput id="author" name="author" children="작성자" className={InputLabel} required={true} disabled={true} placeholder="작성자" />
            <TextInput id="title" name="title" children="제목" className={clsx(InputLabel, Essential)} required={true} placeholder="제목을 입력해주세요." />
            <Textarea id="content" name="content" children="글 내용" className={clsx(InputLabel, Essential)} required={true} placeholder="내용을 입력해주세요." />
            <FileInput id="file" children="이미지 파일 첨부" className={InputLabel} required={false} />
          </div>
        </form>
      </div>
    </main>
  )
}
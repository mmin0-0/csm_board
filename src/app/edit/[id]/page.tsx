import { TitWrap, Typography } from "@/app/_component/Typography";
import { ContWrap, TitleWrap } from "@/app/styles/component/layout.css";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import clsx from "clsx";
import { Button, ButtonWrap } from "@/app/_component/Button";
import { InputLabel, Essential, FormGroup } from "@/app/styles/component/input.css";
import { Textarea, TextInput, FileInput } from "@/app/_component/Input";
import { hide } from "@/app/styles/globals.css";

type Props = { params: { id: string } };
export default async function Edit(props: Props) {
  const db = (await connectDB).db('csm_board');
  const data = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });

  if (!data) {
    return <Typography>게시글을 찾을 수 없습니다.</Typography>
  }

  const post = {
    author: data.author || '',
    title: data.title || '',
    content: data.content || '',
    file: data.file || '',
    postType: 'general',
    createAt: data.createAt || '',
  };

  return (
    <main>
      <TitWrap className={TitleWrap}>
        <Typography as="h4" weight="bold" size="xlarge">게시글 수정하기</Typography>
      </TitWrap>
      <div className={ContWrap}>
        {/* <Form post={post} /> */}
        <form action="/api/posts/edit" method="POST">
          <div className={FormGroup}>
            <input name="_id" className={hide} defaultValue={data._id.toString()} />
            <TextInput id="author" name="author" children="작성자" className={InputLabel} value="작성자" disabled={true} />
            <TextInput id="title" name="title" children="제목" className={clsx(InputLabel, Essential)} required={true} defaultValue={post.title} placeholder="제목을 입력해주세요." />
            <Textarea id="content" name="content" children="글 내용" className={clsx(InputLabel, Essential)} required={true} defaultValue={post.content} placeholder="내용을 입력해주세요." />
            <FileInput id="file" children="이미지 파일 첨부" className={InputLabel} required={false} />
          </div>
          <ButtonWrap>
            <Button type="submit">수정하기</Button>
            <Button color="secondary">취소</Button>
          </ButtonWrap>
        </form>
      </div>
    </main>
  )
}
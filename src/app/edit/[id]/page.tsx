import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { TitWrap, Typography } from "@/app/_component/Typography";
import { ContWrap, TitleWrap } from "@/app/styles/component/layout.css";
import Form from "./_component/Form";

type Props = { params: { id: string } };
export default async function Edit(props: Props) {
  const db = (await connectDB).db('csm_board');
  const data = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });

  if (!data) {
    return <Typography>게시글을 찾을 수 없습니다.</Typography>
  }

  const post = {
    _id: data._id.toString(),
    author: data.author || '',
    title: data.title || '',
    content: data.content || '',
    file: data.file || '',
    postType: data.postType || 'general',
    createAt: data.createAt || '',
  };

  return (
    <main>
      <TitWrap className={TitleWrap}>
        <Typography as="h4" weight="bold" size="xlarge">게시글 수정하기</Typography>
      </TitWrap>
      <div className={ContWrap}>
        <Form post={post} />
      </div>
    </main>
  )
}
'use client';
import { Button, ButtonWrap } from "@/app/_component/Button";
import { useRouter } from "next/navigation";

type Props = {post: {_id: string}};
export default function PostActions({post}:Props){
  const router = useRouter();
  const handleModify = () => {router.push(`/edit/${post._id.toString()}`)};
  const handleDelete = () => {};

  return (
    <ButtonWrap>
      <Button onClick={handleModify}>글 수정</Button>
      <Button color="secondary" onClick={handleDelete}>글 삭제</Button>
    </ButtonWrap>
  )
}
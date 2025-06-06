'use client';
import { Button, ButtonWrap } from "@/app/_component/Button";
import { Post as IPost } from "@/model/Post";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";

type Props = {
  post: IPost,
  session: Session | null,
};

export default function PostActions({post, session}:Props){
  const router = useRouter();

  const handleModify = () => {router.push(`/edit/${post._id.toString()}`)};

  const handleDelete = async() => {
    try{
      const response = await fetch('/api/posts/delete', {
        method: 'DELETE',
        body: post._id.toString()
      });
      if(response.ok){
        alert('삭제 되었습니다.');
        router.push('/board');
        router.refresh();
      } else{
        const error = await response.json();
        alert(error.error || '오류 발생');
      }
    } catch(error){
      alert('네트워크 오류 발생');
    }
  };

  return (
    <ButtonWrap>
      <Button color="secondary" onClick={handleModify}>글 수정</Button>
      <Button onClick={handleDelete}>글 삭제</Button>
    </ButtonWrap>
  )
}
'use client';
import { Button } from "@/app/_component/Button";
import { PostLike as IPostLike } from "@/model/PostLike";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function PostLike({postId, userName}:IPostLike){
  const router = useRouter();
  if(!userName){
    alert('로그인 후 이용 가능합니다.');
  };

  const handleLink = async() => {
    const response = await fetch('/api/posts/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({postId, userName})
    })
    .then((res) => {
      if (res.status === 200) {
        alert('좋아요를 눌렀습니다.');
      } else if(res.status === 400){
        alert('이미 좋아요 누른 게시물입니다.');
      }
    })
  };

  return <Button onClick={handleLink}>
    <FontAwesomeIcon icon={faHeart}  />좋아요
  </Button>
}
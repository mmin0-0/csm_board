'use client';
import { Button } from "@/app/_component/Button";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { Post as IPost } from '@/model/Post';
import { Session } from "next-auth";

type Props = {
  post: IPost;
  session: Session | null;
  // liked: boolean | null;
};
export default function PostLike({post, session}:Props){
  const router = useRouter();
  // const [heart, setHeart] = useState<string>(liked ? '❤️' : '🤍');
  const [auto, setAuto] = useState<boolean>(session ? (post.likeUser ?? []).includes(session.user.email ?? '') : false); // 좋아요 체크 여부
  const [likeUserList, setLikeUserList] = useState<string[]>(post.likeUser ?? []);
  const [likeCount, setLikeCount] = useState<number>(post.likeCount ?? 0);
  
  useEffect(()=>{
    if(session){
      setAuto(likeUserList.includes(session.user.email ?? ''));
    }
  }, [likeUserList, session]);

  const handleLike = async() => {
    if(auto === null || auto === false){
      if(!session){
        alert('로그인 후 이용 부탁드립니다.');
        router.push('/api/auth/signin');
        return;
      }

      try {
        const response = await fetch('/api/posts/like', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            _id: post._id,
            // likeUser: post.author,
            likeUser: session.user.email,
            likeCount: post.likeCount,
          }),
        });

        if(response.ok){
          const result = await response.json();
          // setAuto(true);
          setLikeUserList(result.likeUser);
          setLikeCount(result.likeCount);
          alert('좋아요를 눌렀습니다.');
        } else {
          alert('좋아요 처리 중 오류가 발생했습니다.');
        }
      } catch(error){
        console.log(error);
        alert("서버 오류가 발생했습니다.");
      }
    } else{// 좋아요 눌러져 있을때 취소
      alert('이미 좋아요를 누른 게시글 입니다.')
    }
  };

  return <Button onClick={handleLike} size="auto">
    <FontAwesomeIcon icon={faHeart} style={{color: auto ? '#F20000' : '', width: '1.6rem' }} />{likeCount}</Button>
}
'use client';
import { Button } from "@/app/_component/Button";
import { PostLike as IPostLike } from "@/model/PostLike";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { Post as IPost } from '@/model/Post';
import { Session } from "next-auth";

type Props = {
  post: IPost;
  session: Session | null;
  liked: boolean | null;
};
export default function PostLike({post, session, liked}:Props){
  const router = useRouter();
  const [heart, setHeart] = useState<string>('🤍');
  const [auto, setAuto] = useState(liked); // 좋아요 체크 여부
  
  useEffect(()=>{
    if(auto === null || auto === false){
      console.log('좋아요 안눌렸을 때');
      setHeart('🤍');
    } else if(auto === true){
      console.log('좋아요 눌러져 있을 때');
      setHeart('❤️');
    }
  }, []);

  const [likeUserList, setLikeUserList] = useState(post.likeUser);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  let res:boolean | null = null;

  const handleLink = async() => {
    if(auto === null || auto === false){
      const response = await fetch('/api/posts/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          _id: post._id,
          likeUser: post.author,
          likeCount: post.likeCount,
        })
      }).then((response) => {
        if(response.status === 200){
          res = true;
          return response.json();
        } else{
          res = false;
          return response.json();
        }
      }).then((result) => {
        if(res === true){ // session이 존재하면
          setAuto(true);
          setHeart(result[0]);
          setLikeUserList(result[1]);
          setLikeCount(result(2));
          alert('좋아요를 눌렀습니다.');
        } else {
          alert('로그인 후 이용 부탁드립니다.');
          // window.location.href = '/api/auth/signin';
        }
      }).catch((error) => {
        console.log(error);
      })
    } else{// 좋아요 눌러져 있을때 취소
      alert('이미 좋아요를 누른 게시글 입니다.')
    }
  };

  return <Button onClick={handleLink}>{heart} | {likeCount}</Button>
}
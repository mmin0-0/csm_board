'use client';
import { useEffect, useState } from "react";
import { Post as IPost } from "@/model/Post";

export default function Home() {
  const [ posts, setPosts ] = useState<IPost[]>([]);
  useEffect(() => {
    const fetchPost = async() => {
      try {
        const response = await fetch('/api/posts');
        if(!response.ok){
          throw new Error('Failed to fetch post data');
        }
        const data = await response.json();
        setPosts(data);
      } catch(error){
        console.error("❌ API 요청 실패:", error);
      }
    };
    fetchPost();
  }, []);

  return (
    <main>
      메인입니다.
    </main>
  );
}

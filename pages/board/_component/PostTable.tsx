'use client';
import { Post as IPost } from "@/model/Post";
import { useEffect, useState } from "react";

export default function PostTable(){
  const [data, setData] = useState<IPost[]>([]);
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts`);
        if (!res.ok) {
          throw new Error('Failed to fetch post data');
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("❌ API 요청 실패:", error);
      }
    };
    fetchPost();
  }, []);

  console.log(data)

  return (
    <>
      {data.map((post, idx) => (
        <div key={idx}>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  )
}
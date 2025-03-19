'use client';
import { TitWrap, Typography } from "@/component/Typography";
import { ContWrap } from "@/styles/component/layout.css";
import { useEffect, useState } from "react";
import { Post as IPost } from "@/model/Post";

export default function Board() {
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

  if (!data) return <p>Post not found.</p>;

  return (
    <main>
      <TitWrap>
        <Typography as="strong">게시판 리스트</Typography>
      </TitWrap>
      <div className={ContWrap}>
      </div>
    </main>
  )
}
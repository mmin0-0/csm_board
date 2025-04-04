'use client';
import { useState } from "react";
import * as style from "@/app/styles/pages/home.css";
import Link from "next/link";
import clsx from "clsx";
import { Post as IPost } from "@/model/Post";
import { Typography } from "@/app/_component/Typography";

type Props = { posts: IPost[] };
export default function BoardList({ posts }: Props) {
  const [activeTab, setActiveTap] = useState('notice');
  const notices = posts.filter(item => item.postType === 'notice');
  const boardPosts = posts.filter(item => item.postType === 'general');
  const tabs = ['notice', 'board'];
  const handleTabClick = (tabValue: string) => {
    setActiveTap(tabValue);
  };

  return (
    <>
      <div className={style.ContTitWrap}>
        <Typography as="strong" color="black" size="medium" weight="bold">Board List</Typography>
        <Link href="/board" className={style.MoreLink}>View All</Link>
      </div>
      <div className={clsx(style.ContWrap, style.BoardContWrap)}>
        {(activeTab === 'notice' ? notices : boardPosts).length === 0 ? (
          <div className={style.BoardContEmpty}>게시물이 없습니다.</div>
        ) : (
          <ul>
            {(activeTab === 'notice' ? notices : boardPosts).map((post, idx) => <li key={idx}>
              <Link href={`/board/${post._id}`} className={style.BoardItem}>
                <Typography color="black">{post.title}</Typography>
                <Typography as="span" color="black">{post.createAt.split(' ')[0]}</Typography>
              </Link>
            </li>)}
          </ul>
        )}
      </div>
    </>
  )
}
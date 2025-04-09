'use client';
import { useState } from "react";
import * as style from "@/app/styles/pages/home.css";
import Link from "next/link";
import clsx from "clsx";
import { Post as IPost } from "@/model/Post";
import { Typography } from "@/app/_component/Typography";

type Props = { posts: IPost[] };
export default function BoardList({ posts }: Props) {
  return (
    <>
      <div className={style.ContTitWrap}>
        <Typography as="strong" color="black" size="medium" weight="bold">Board List</Typography>
        <Link href="/board" className={style.MoreLink}>View All</Link>
      </div>
      <div className={clsx(style.ContWrap, style.BoardContWrap)}>
        {posts.length > 0 ? (
        <ul>
          {posts.slice(0, 5).map((post) => 
            <li key={post._id.toString()}>
              <Link href={`/board/${post._id}`} className={style.BoardItem}>
                <Typography color="black">{post.title}</Typography>
                <Typography as="span" color="gray" size="small">{post.createAt.split(' ')[0]}</Typography>
              </Link>
            </li>
          )}
        </ul>
        ) : (
          <div className={style.BoardContEmpty}>게시물이 없습니다.</div>
        )}
      </div>
    </>
  )
}
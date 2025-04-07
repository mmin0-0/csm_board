"use client";
import * as style from "@/app/styles/pages/profile.css";
import { ContTitWrap, MoreLink } from "@/app/styles/pages/home.css";
import { Post as IPost } from "@/model/Post";
import clsx from "clsx";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { Typography } from "@/app/_component/Typography";
import Link from "next/link";
import { Todo as ITodo } from "@/model/Todo";
import { Button } from "@/app/_component/Button";

type Props = {
  session: Session | null;
  posts: IPost[];
  todos: ITodo[];
};
export default function UserDetails({ session, posts, todos }: Props) {
  const router = useRouter();
  return (
    <div className={style.UserDetails}>
      <div className={clsx(style.ProfileContent, style.UserWritePosts)}>
        <div className={ContTitWrap}>
          <Typography as="strong" color="black" size="medium" weight="bold">
            "{session?.user.name}"님의 게시물
          </Typography>
          <Link href="/board" className={MoreLink}>더보기▶</Link>
        </div>
        <div className={style.ContWrap}>
          {posts.length > 0 ? (
            posts.map((post, idx) => (
              <div key={idx} className={style.ContentItem} onClick={() => router.push(`/board/${post._id}`)}>
                <Typography color="black">{post.title}</Typography>
                <Typography color="black" as="span">{post.createAt.split(' ')[0]}</Typography>
              </div>
            ))
          ) : (<Typography>작상한 게시물이 없습니다.</Typography>)}
        </div>
      </div>
      <div className={clsx(style.ProfileContent, style.UserSchedule)}>
        <div className={ContTitWrap}>
          <Typography as="strong" color="black" size="medium" weight="bold">"{session?.user.name}"님의 일정</Typography>
          <Button size="auto">일정 추가하기</Button>
        </div>
        <div className={style.ContWrap}>
          {todos.length > 0 ? (
            todos.map((todo, idx) => 
              <div key={idx} className={style.ContentItem}>
                <Typography color="black">{todo.title}</Typography>
                <Typography as="span" color="black">{todo.date.toString()}</Typography>
              </div>
              )
          ): (<Typography>일정이 없습니다.</Typography>)}
        </div>
      </div>
    </div>
  );
}

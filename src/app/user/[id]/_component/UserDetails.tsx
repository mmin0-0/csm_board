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
import { ImgWrap } from "@/app/_component/ImgWrap";

type Props = {
  session: Session | null;
  posts: IPost[];
  todos: ITodo[];
};
export default function UserDetails({ session, posts, todos }: Props) {
  const router = useRouter();
  const eventInfo = [
    { title: "제22회 대한민국 교육박람회", date: "2025.01.15 - 17" },
    { title: "2024 금천 코딩박람회", date: "2024.05.25" },
    { title: "제21회 대한민국 교육박람회", date: "2024.01.17 - 19" },
  ];

  return (
    <div className={style.UserDetails}>
      <div className={clsx(style.ProfileContent, style.UserWritePosts)}>
        <div className={ContTitWrap}>
          <Typography as="strong" color="black" size="medium" weight="bold">
            "{session?.user.name}"님의 게시물
          </Typography>
          <Link href="/board" className={MoreLink}>
            더보기▶
          </Link>
        </div>
        <div className={style.ContWrap}>
          {posts.length > 0 ? (
            posts.map((post, idx) => (
              <div
                key={idx}
                className={style.ContentItem}
                onClick={() => router.push(`/board/${post._id}`)}
              >
                <div className={style.ContentTxt}>
                  <Typography color="black" lineHeight="regular">
                    {post.title}
                  </Typography>
                  <Typography color="black" as="span">
                    {post.createAt.split(" ")[0]}
                  </Typography>
                </div>
              </div>
            ))
          ) : (
            <Typography color="black">작상한 게시물이 없습니다.</Typography>
          )}
        </div>
      </div>
      <div className={clsx(style.ProfileContent, style.UserSchedule)}>
        <div className={ContTitWrap}>
          <Typography as="strong" color="black" size="medium" weight="bold">
            "{session?.user.name}"님의 일정
          </Typography>
        </div>
        <div className={style.ContWrap}>
          {todos.length > 0 ? (
            todos.map((todo, idx) => (
              <div key={idx} className={style.ContentItem}>
                <div className={style.ContentTxt}>
                  <Typography color="black" lineHeight="regular">
                    {todo.title}
                  </Typography>
                  <Typography as="span" color="black">
                    {todo.date.toString()}
                  </Typography>
                </div>
              </div>
            ))
          ) : (
            <Typography color="black">일정이 없습니다.</Typography>
          )}
        </div>
      </div>
      <div className={clsx(style.ProfileContent, style.RecommendContent)}>
        <div className={ContTitWrap}>
          <Typography as="strong" color="black" size="medium" weight="bold">
            추천 콘텐츠
          </Typography>
        </div>
        <div className={clsx(style.ContWrap, style.RecommendList)}>
          {eventInfo.map((event, idx) => (
            <Link href="#" className={style.ContentItem} key={idx}>
              <ImgWrap
                src={`page/profile/event_0${idx + 1}.jpg`}
                alt={event.title}
                className={style.EventPreview}
              />
              <Typography color="black" lineHeight="regular" weight="semiBold">{event.title}</Typography>
              <Typography as="span" color="black" size="small">{event.date}</Typography>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

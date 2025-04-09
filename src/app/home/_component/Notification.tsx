import { Typography } from "@/app/_component/Typography";
import * as style from "@/app/styles/pages/home.css";
import Link from "next/link";
import { Post as IPost } from "@/model/Post";
import clsx from "clsx";

type Props = { posts: IPost[] };
export default function Notification({posts}:Props) {
  const noticePosts = posts.filter(item => item.postType === 'notice');
  return (
    <>
      <div className={style.ContTitWrap}>
        <Typography as="strong" size="medium" weight="bold">
          Notifications (5)
        </Typography>
        <Link href="/board" className={style.MoreLink}>
          View All
        </Link>
      </div>
      <div className={clsx(style.ContWrap, style.BoardContWrap, style.NotificationContWrap)}>
      {noticePosts.length > 0 ? (
        <ul>
          {noticePosts.slice(0, 5).map((post) => 
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
  );
}

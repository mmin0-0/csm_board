import { ContWrap } from "@/app/styles/component/layout.css";
import EventSchedule from "@/app/home/_component/EventSchedule";
import * as style from "@/app/styles/pages/home.css";
import { connectDB } from "@/utils/database";
import BoardList from "@/app/home/_component/BoardList";
import clsx from "clsx";

type Props = {params: {id: string}};
export default async function Home({params}:Props) {
  const db = (await connectDB).db("csm_board");
  const data = await db.collection("post").find().toArray();
  const posts = data.map(post => ({
    _id: post._id.toString(),
    author: post.author,
    title: post.title,
    content: post.content,
    postType: post.postType,
    createAt: post.createAt,
    likeUser: post.likeUser,
    likeCount: post.likeCount,
  }));
  
  return (
    <main>
      <div className={ContWrap}>
        <div id="eventList" className={style.EventWrap}>
          <EventSchedule />
        </div>
        <div className={clsx(style.HomeContent, style.BoardList)}>
          <BoardList posts={posts} />
        </div>
      </div>
    </main>
  );
}

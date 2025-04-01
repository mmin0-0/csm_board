import { connectDB } from "@/utils/database";
import * as style from "@/app/styles/pages/home.css";
import clsx from "clsx";
import { ContWrap } from "@/app/styles/component/layout.css";
import EventSchedule from "@/app/home/_component/EventSchedule";
import BoardList from "@/app/home/_component/BoardList";
import Lecture from "@/app/home/_component/Lecture";
import JobPosting from "@/app/home/_component/JobPosting";

export default async function Home() {
  const db = (await connectDB).db("csm_board");
  const data = await db.collection("post").find().toArray();
  const posts = data.map((post) => ({
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
        <div className={style.ContWrapList}>
          <div>
            <div className={clsx(style.HomeContent, style.BoardWrap)}>
              <BoardList posts={posts} />
            </div>
            <div className={clsx(style.HomeContent, style.LectureWrap)}>
              <Lecture />
            </div>
          </div>
          <div>
            <div className={clsx(style.HomeContent, style.JobPostingWrap)}>
              <JobPosting />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

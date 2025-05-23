import { connectDB } from "@/utils/database";
import clsx from "clsx";
import * as style from "@/app/styles/pages/home.css";
import { ContHead, PageContainer } from "@/app/styles/component/layout.css";
import BoardList from "@/app/home/_component/BoardList";
import Lecture from "@/app/home/_component/Lecture";
import JobPosting from "@/app/home/_component/JobPosting";
import LeadsActivity from "@/app/home/_component/LeadsActivity";
import Notification from "@/app/home/_component/Notification";
import ScheduleCalendar from "@/app/_component/ScheduleCalendar";

import Header from "@/app/_component/Header";

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
      <div className={clsx(PageContainer, style.HomeContWrap)}>
        <div className={style.MainContent}>
          <div className={clsx(ContHead, style.Header)}>
            <Header />
          </div>
          <div className={clsx(style.HomeContent, style.BoardWrap)}>
            <BoardList posts={posts} />
          </div>
          <div className={clsx(style.HomeContent, style.LeadsActivityWrap)}>
            <LeadsActivity />
          </div>
          <div className={clsx(style.HomeContent, style.LectureWrap)}>
            <Lecture />
          </div>
          <div className={clsx(style.HomeContent, style.JobPostingWrap)}>
            <JobPosting />
          </div>
          <div className={clsx(style.HomeContent, style.NotificationsWrap)}>
            <Notification posts={posts} />
          </div>
        </div>
        <div className={style.SubContent}>
          <ScheduleCalendar />
        </div>
      </div>
    </main>
  );
}

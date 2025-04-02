import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { connectDB } from "@/utils/database";
import clsx from "clsx";
import * as style from "@/app/styles/pages/home.css";
import { ContHead } from "@/app/styles/component/layout.css";
import EventSchedule from "@/app/home/_component/EventSchedule";
import BoardList from "@/app/home/_component/BoardList";
import Lecture from "@/app/home/_component/Lecture";
import JobPosting from "@/app/home/_component/JobPosting";
import LeadsActivity from "@/app/home/_component/LeadsActivity";
import ScheduleCalendar from "./_component/ScheduleCalendar";
import { Typography } from "../_component/Typography";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default async function Home() {
  const db = (await connectDB).db("csm_board");
  const data = await db.collection("post").find().toArray();
  const session = await getServerSession(authOptions);

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
      <div className={style.HomeContWrap}>
        <div className={style.MainContent}>
          <div className={ContHead}>
            {session ? (
              <>Hello <Typography as="strong" color="pink">{session.user.name}</Typography>,welcome back!</>
            ) : (
              <>Hello, welcome <Typography as="strong">CSㆍM</Typography></>
            )}
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
              <div className={clsx(style.HomeContent, style.LeadsActivityWrap)}>
                <LeadsActivity />
              </div>
            </div>
          </div>
          <div className={clsx(style.HomeContent, style.NotificationsWrap)}>
            <Link href="#">
              <Typography as="strong" color="black" size="large" weight="bold">Notifications (5)</Typography>
              <FontAwesomeIcon icon={faArrowRight} style={{fontSize: '2.4rem'}} />
            </Link>
          </div>
        </div>
        <div className={style.SubContent}>
          <ScheduleCalendar />
          <div id="eventList" className={style.EventWrap}>
            <EventSchedule />
          </div>
        </div>
      </div>
    </main>
  );
}

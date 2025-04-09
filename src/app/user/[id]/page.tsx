import ScheduleCalendar from "@/app/_component/ScheduleCalendar";
import { PageContainer, TitleWrap } from "@/app/styles/component/layout.css";
import * as style from "@/app/styles/pages/profile.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import UserInfo from "./_component/UserInfo";
import UserDetails from "./_component/UserDetails";
import { connectDB } from "@/utils/database";
import { Post as IPost } from "@/model/Post";
import { Todo as ITodo } from "@/model/Todo";
import { TitWrap, Typography } from "@/app/_component/Typography";
import SignAlert from "@/app/_component/SignAlert";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <SignAlert />
  }
  
  const userEmail = session?.user.email;
  const db = (await connectDB).db("csm_board");
  const postData = await db.collection("post").find({authorEmail: session?.user.email}).toArray();
  const todoData = await db.collection("todo").find({ author: userEmail }).toArray();

  const posts: IPost[] = postData.map((post) => ({
    _id: post._id.toString(),
    author: post.author,
    authorEmail: post.authorEmail,
    title: post.title,
    content: post.content,
    postType: post.postType,
    createAt: post.createAt,
  }));

  const todos: ITodo[] = todoData.map((todo) => ({
    _id: todo._id.toString(),
    author: todo.author,
    title: todo.title,
    date: todo.date,
  }));

  return (
    <main>
      <div className={PageContainer}>
        <TitWrap className={TitleWrap}>
          <Typography as="h4" weight="bold" size="xlarge">
            프로필
          </Typography>
        </TitWrap>
        <div className={style.ProfileContWrap}>
          <div className={style.MainContent}>
            <UserInfo session={session} />
            <UserDetails session={session} posts={posts} todos={todos} />
          </div>
          <div className={style.SubContent}>
            <ScheduleCalendar />
          </div>
        </div>
      </div>
    </main>
  );
}

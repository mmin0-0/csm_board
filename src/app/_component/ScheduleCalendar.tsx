import { connectDB } from '@/utils/database';
import * as style from "@/app/styles/component/calendar.css";
import { Todo as ITodo } from '@/model/Todo'; 
import TodoCalendar from '@/app/_component/TodoCalendar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { Suspense } from 'react';
import { Typography } from '@/app/_component/Typography';

export default async function ScheduleCalendar(){
  const session = await getServerSession(authOptions);
  try{
    const db = (await connectDB).db("csm_board");
    const todos = await db.collection("todo").find().toArray();
  
    const formattedTodos: ITodo[] = todos.map((todo) => ({
      _id: todo._id.toString(),
      author: todo.author,
      title: todo.title,
      date: new Date(todo.date),
    }));
  
    return (
      <div className={style.CalendarWrap}>
        <Suspense fallback={<Typography>Loading...</Typography>}>
          <TodoCalendar todos={formattedTodos} session={session} />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error("Error fetching todos:", error);
    return <Typography>Error loading todos</Typography>;
  }
}
import { connectDB } from '@/utils/database';
import * as style from "@/app/styles/component/calendar.css";
import { Todo as ITodo } from '@/model/Todo'; 
import { Suspense } from 'react';
import { Typography } from '@/app/_component/Typography';
import TodoCalendar from '@/app/home/_component/TodoCalendar';

async function Todos(){ 
  const db = (await connectDB).db("csm_board");
  const todos = await db.collection("todo").find().toArray();
  const formattedTodos: ITodo[] = todos.map((todo) => ({
    _id: todo._id.toString(),
    title: todo.title,
    date: new Date(todo.date),
  }));

  return <TodoCalendar todos={formattedTodos} />
}

export default function ScheduleCalendar(){
  return(
    <div className={style.CalendarWrap}>
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <Todos />
      </Suspense>
    </div>
  )
}
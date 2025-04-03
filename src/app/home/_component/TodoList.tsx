'use client';
import { Todo as ITodo, Value } from "@/model/Todo";
import * as style from "@/app/styles/component/calendar.css";
import { Typography } from "@/app/_component/Typography";
import { useEffect, useState } from "react";
import { Session } from "next-auth";

type Props = {
  date: Value;
  todos: ITodo[];
  session: Session | null;
};
export default function TodoList({ date, todos, session }: Props) {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {
    if(session){
      const userTodos = todos.filter((todo) => todo.author === session.user.email || todo.author === "admin");
      setTodoList(userTodos);
    } else{
      const adminTodos = todos.filter((todo) => todo.author === "admin");
      setTodoList(adminTodos);
    }
  },[session, todos]);
  return (
    <>
      <Typography>To do List</Typography>
      <div className={style.TodoListInfo}>
        <Typography>
          {date?.toLocaleString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </Typography>
        <div className={style.TodoListInfoWrap}>
          {todoList.length > 0 ? (
            todoList.map((todo, index) => (
              <div key={index} className={style.TodoListItem}>
                <Typography lineHeight="medium">{todo.title}</Typography>
              </div>
            ))
          ): (<Typography>일정이 없습니다.</Typography>)}
        </div>
      </div>
    </>
  );
}

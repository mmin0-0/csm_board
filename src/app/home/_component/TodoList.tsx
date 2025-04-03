'use client';
import { Todo as ITodo, Value } from "@/model/Todo";
import * as style from "@/app/styles/component/calendar.css";
import { Typography } from "@/app/_component/Typography";
import { useEffect, useState } from "react";
import { Session } from "next-auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

type Props = {
  date: Value;
  todos: ITodo[];
  session: Session | null;
};
export default function TodoList({ date, todos, session }: Props) {
  const router = useRouter();
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

  const handleDelete = async(id: string) => {
    try{
      const response = await fetch('/api/todos/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({_id: id})
      });
      if(response.ok){
        alert('삭제 되었습니다.');
        router.push('/home');
        router.refresh();
      } else{
        const error = await response.json();
        alert(error.error || '오류 발생');
      }
    } catch(error){
      alert('네트워크 오류 발생');
    }
  };

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
                <i onClick={() => handleDelete(todo._id)} className={style.TodoRemove}><FontAwesomeIcon icon={faTrash} /></i>
              </div>
            ))
          ): (<Typography>일정이 없습니다.</Typography>)}
        </div>
      </div>
    </>
  );
}

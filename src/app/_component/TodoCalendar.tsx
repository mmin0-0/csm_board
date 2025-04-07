"use client";
import { Todo as ITodo, Value } from "@/model/Todo";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TodoList from "@/app/_component/TodoList";
import * as style from "@/app/styles/component/calendar.css";
import { Button } from "@/app/_component/Button";
import TodoModal from "@/app/_component/TodoModal";
import { Session } from "next-auth";

type Props = { 
  todos: ITodo[];
  session: Session | null;
};
export default function TodoCalendar({ todos, session }: Props) {
  const offset = new Date().getTimezoneOffset() * 60000;
  const today = new Date();
  const [date, setDate] = useState<Value>(today);
  const [todoList, setTodoList] = useState<ITodo[]>(todos);
  const [currentTodos, setCurrentTodos] = useState<ITodo[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (date instanceof Date) {
      const selectedDate = formattedDate(date);
      const filteredTodos = todoList.filter(
        (todo) => formattedDate(todo.date) === selectedDate
      );
      setCurrentTodos(filteredTodos);
    } else {
      setCurrentTodos([]);
    }
  }, [date, todoList]);

  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };

  const formattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const dateChangeHandler = (newDate: Value) => {
    setDate(newDate);
  };

  const isSameDay = (d1: Date, d2: Date) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const addContent = ({ date }: { date: Date }) => {
    let content = [];
    if (isSameDay(date, today)) {
      content.push(
        <p key={`today-${date.getDate()}`}>
          Today {date.getMonth() + 1} / {date.getDate()}
        </p>
      );
    } else {
      content.push(<br key={`break-${date.getDate()}`} />);
    }

    const todosForDate = todoList.filter((todo) => isSameDay(todo.date, date));

    for (let i = 0; i < todosForDate.length; i++) {
      content.push(<span key={`todo-${i}-${date.getDate()}`}>✨</span>);
    }
    return <>{content}</>;
  };

  return (
    <>
      <div className={style.CalendarCont}>
        <Button onClick={modalHandler} size="large">일정추가</Button>
        <div className={style.CalendarInfo}>
          <Calendar
            value={date}
            onChange={dateChangeHandler}
            locale="en"
            prev2Label={null}
            next2Label={null}
            formatShortWeekday={(locale, date) =>
              ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
            }
          />
          <div className={style.TodoListWrap}>
            <TodoList date={date} todos={currentTodos} session={session} />
          </div>
        </div>
      </div>
      {showModal && <TodoModal modalHandler={modalHandler} />}
    </>
  );
}

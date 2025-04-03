import { Todo as ITodo, Value } from "@/model/Todo";
import * as style from "@/app/styles/component/calendar.css";
import { Typography } from "@/app/_component/Typography";

type Props = {
  date: Value;
  todos: ITodo[];
};
export default function TodoList({ date, todos }: Props) {
  return (
    <div className={style.TodoListInfo}>
      <Typography>
        {date?.toLocaleString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      </Typography>
      <div>
        {todos.map((todo, index) => (
          <div key={index} className={style.TodoListItem}>
            <Typography>{todo.title}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

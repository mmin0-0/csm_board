import { Todo as ITodo, Value } from "@/model/Todo";

type Props = {
  date: Value;
  todos: ITodo[];
};
export default function TodoList({ date, todos }: Props) {
  return (
    <div>
      일정 내용들
      <br />
      <p>
        {date?.toLocaleString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      </p>
      {todos.map((todo, index) => (
        <p key={index} className="border-4 py-4">
          {todo.title}
        </p>
      ))}
    </div>
  );
}

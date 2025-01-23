import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 1,
      text: "Belajar React",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Belajar Vue",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Belajar Angular",
      isCompleted: true,
    },
    {
      id: 4,
      text: "Belajar Svelte",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Belajar React Native",
      isCompleted: false,
    },
  ];
  return <>{data.map((item) => <Todo key={item.id} {...item} />)}</>;
}

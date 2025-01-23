import Todo from "./Todo";

export default function TodoList() {
  return (
    <>
      <Todo text="Belajar React" isCompleted={true} />
      <Todo text="Belajar Vue" isCompleted={false} />
      <Todo text="Belajar Angular" isCompleted={false} />
      <Todo text="Belajar Svelte" isCompleted={false} />
      <Todo text="Belajar React Native" isCompleted={false} />
    </>
  );
}

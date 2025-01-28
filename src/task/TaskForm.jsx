import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [item, setItem] = useState("");
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    onSubmit(item);
    setItem("");
  };
  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add Task</button>
      </form>
    </div>
  );
}

import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleClick = () => {
    setText("");
    onAddNote(text);
  };
  return (
    <>
      <input
        type="text"
        placeholder="add note"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add Note</button>
    </>
  );
}

import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContect";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);
  const handleChange = (e) => setText(e.target.value);
  const handleClick = () => {
    setText("");
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
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

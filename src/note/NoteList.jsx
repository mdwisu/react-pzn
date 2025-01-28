import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContect";

export default function NoteList() {
  const notes = useContext(NotesContext);
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}

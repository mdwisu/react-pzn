import { useImmer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";

let id = 0;
const initialNotes = [
  {
    id: id++,
    text: "Belajar React",
    done: false,
  },
  {
    id: id++,
    text: "Belajar Vue",
    done: false,
  },
  {
    id: id++,
    text: "Belajar Angular",
    done: false,
  },
  {
    id: id++,
    text: "Belajar Svelte",
    done: false,
  },
];

function notesReducer(notes, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [...notes, { id: id++, text: action.text, done: false }];
    case "UPDATE_NOTE":
      return notes.map((note) =>
        note.id === action.id
          ? { ...note, text: action.text, done: action.done }
          : note
      );
    case "DELETE_NOTE":
      return notes.filter((note) => note.id !== action.id);
    default:
      return notes;
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    dispatch({ type: "ADD_NOTE", text });
  }

  function handleChangeNote(note) {
    dispatch({ type: "UPDATE_NOTE", ...note });
  }

  function handleDeleteNote(note) {
    dispatch({ type: "DELETE_NOTE", id: note.id });
  }
  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}

import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

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
  if (action.type === "ADD_NOTE") {
    notes.push({ id: id++, text: action.text, done: false });
  } else if (action.type === "UPDATE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes[index].text = action.text;
    notes[index].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes.splice(index, 1);
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

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

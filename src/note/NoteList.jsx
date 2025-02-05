import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContect";

export default function NoteList() {
  const notes = useContext(NotesContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      console.info('Filtering notes')
      return note.text.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, notes]);

  function handleSearch() {
    console.info("search")
    setSearch(searchInput.current.value);
  }
  return (
    <div>
      <input ref={searchInput} placeholder="search" />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}

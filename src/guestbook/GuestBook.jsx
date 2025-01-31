import { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nameInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setMessage("");
    nameInput.current.focus();
    alert(`${name}: ${message}`);
  }
  return (
    <div>
      <h1>Guest Book</h1>
      <form>
        <GuestBookForm ref={nameInput} name={name} setName={setName} />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

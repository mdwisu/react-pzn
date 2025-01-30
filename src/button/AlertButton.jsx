import { useRef } from "react";

export default function AlertButton({ text, message }) {
  const counter = useRef(0);
  function handleClick(e) {
    console.info(e.target);
    alert(`message: ${message} counter: ${counter.current++}`);
  }

  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

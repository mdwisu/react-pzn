import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter((c) => c + 1);
          setCounter((c) => c + 1);
          setCounter((c) => c + 1);
          console.log(counter);
        }}
      >
        +
      </button>
    </div>
  );
}

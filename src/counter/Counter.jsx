import { useState } from "react";

export default function Counter({ name }) {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((c) => c + 1);
    console.log(counter);
  };

  return (
    <div>
      <h1>
        Counter {name} : {counter}
      </h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

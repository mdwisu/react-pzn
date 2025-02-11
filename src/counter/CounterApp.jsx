import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show2, setShow2] = useState(true);

  const handleChange = (e) => {
    setShow2(e.target.checked);
  };

  return (
    <div>
      {show2 ? <Counter key="1" name="1" /> : <Counter key="2" name="2" />}
      <input type="checkbox" checked={show2} onChange={handleChange} />
    </div>
  );
}

export default function SayHelloForm() {
  function handleClick(e) {
    e.preventDefault();
    const name = document.getElementById("input_name").value;
    document.getElementById("text_hello").innerText = `Hello ${name}`;
  }

  return (
    <div>
      <form action="">
        <input id="input_name" type="text" />
        <button onClick={handleClick}>say hello</button>
      </form>
      <h1 id="text_hello">Hello World</h1>
    </div>
  );
}

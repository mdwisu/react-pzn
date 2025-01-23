export default function HelloWorld() {
  return (
    <>
      <h1>hello world</h1>
      <HeaderHelloWorld text="halo" />
      <ParagraphHelloWorld />
    </>
  );
}
function HeaderHelloWorld({ text = "Ups, lupa kasi text" }) {
  return (
    <h1 style={{ color: "red", backgroundColor: "yellow" }}>
      {text.toUpperCase()}
    </h1>
  );
}

function ParagraphHelloWorld() {
  const text = "Selamat belajar reactjs";
  return <p>{text.toUpperCase()}</p>;
}

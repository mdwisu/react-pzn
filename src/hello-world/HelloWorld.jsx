import "./HelloWorld.css";

export default function HelloWorld() {
  const props = {
    text: "Ups, lupa kasi text",
  };
  return (
    <>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </>
  );
}
function HeaderHelloWorld({ text = "Ups, lupa kasi text" }) {
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "Selamat belajar reactjs";
  return <p className="content">{text.toUpperCase()}</p>;
}

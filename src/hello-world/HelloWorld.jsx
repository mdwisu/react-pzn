export default function HelloWorld() {
  return (
    <>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </>
  );
}

function HeaderHelloWorld() {
  return <h1>hello world</h1>;
}

function ParagraphHelloWorld() {
  return <p>selamat belajar reactjs dari dwi</p>;
}

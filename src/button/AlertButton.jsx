export default function AlertButton({ text, message }) {
  function handleClick() {
    alert(message);
  }

  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

export default function MyButton({ text, onSmash }) {
  return (
    <div>
      <button onClick={onSmash}>{text}</button>
    </div>
  );
}

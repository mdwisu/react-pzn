export default function ProfileFrom({ name, setName }) {
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <h2>Profile Form</h2>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

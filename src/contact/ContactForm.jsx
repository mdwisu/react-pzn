import { useImmer } from "use-immer";

export default function ContactForm() {
  const [contact, updateContact] = useImmer({
    name: "",
    message: "",
  });

  function handleChange(e) {
    updateContact(draft => {
      draft[e.target.name] = e.target.value;
    });
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={contact.message}
          onChange={handleChange}
        />
      </form>
      <h1>Contact Detail</h1>
      <p>{contact.name}</p>
      <p>{contact.message}</p>
    </div>
  );
}


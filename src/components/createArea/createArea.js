import React, { useState } from "react";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const { title, content } = note;

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    e.preventDefault();
    if (title.length > 0 && content.length > 0) {
      onAdd(note);
      setNote({ title: "", content: "" });
    }
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          value={title}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Title"
        />
        <textarea
          name="content"
          value={content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;

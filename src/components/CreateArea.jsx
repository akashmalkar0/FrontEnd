import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [userInput, setUserInput] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setUserInput((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (userInput.title.trim() || userInput.content.trim()) {
      props.onAdd(userInput);
      setUserInput({ title: "", content: "" });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={userInput.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          value={userInput.content}
          rows="3"
        />
        <button>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

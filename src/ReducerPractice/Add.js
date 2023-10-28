import { useState } from "react";

export default function Add({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="Add"
        onChange={(event) => setText(event.target.value)}
      />

      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}

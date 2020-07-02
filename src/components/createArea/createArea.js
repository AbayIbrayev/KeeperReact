import React from "react";

const createArea = () => {
  return (
    <div>
      <form>
        <input name="title" autoComplete="off" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default createArea;

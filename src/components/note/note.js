import React from "react";

const note = ({ title, content }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default note;

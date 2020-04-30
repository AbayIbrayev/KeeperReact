import React from "react";

let date = new Date();
let year = date.getFullYear();

const footer = () => {
  return (
    <footer>
      <p>
        Copyright &copy; {year},{" "}
        <a target="__blank" href="https://abay.codes">
          Abay's Corner
        </a>
      </p>
    </footer>
  );
};

export default footer;

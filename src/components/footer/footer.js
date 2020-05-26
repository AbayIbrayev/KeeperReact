import React from "react";

const year = new Date().getFullYear();

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

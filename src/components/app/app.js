import React from "react";
import Header from "../header";
import Footer from "../footer";
import Note from "../note";
import notes from "../../notes";

function createNotes({ key, title, content }) {
  return <Note key={key} title={title} content={content} />;
}

const app = () => {
  return (
    <>
      <Header />
      <main>{notes.map(createNotes)}</main>
      <Footer />
    </>
  );
};

export default app;

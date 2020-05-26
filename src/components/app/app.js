import React from "react";
import Header from "../header";
import Footer from "../footer";
import Note from "../note";
import notes from "../../notes";

const app = () => {
  return (
    <>
      <Header />
      <main>
        {notes.map(({ key, title, content }) => {
          return <Note key={key} title={title} content={content} />;
        })}
      </main>
      <Footer />
    </>
  );
};

export default app;

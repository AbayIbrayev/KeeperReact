import React from "react";
import Header from "../header";
import Footer from "../footer";
import Note from "../note";
import notes from "../../notes";
import CreateArea from "../createArea";

const app = () => {
  return (
    <>
      <Header />
      <main>
        <CreateArea />

        <div className="notes">
          {notes.map(({ key, title, content }) => (
            <Note key={key} title={title} content={content} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default app;

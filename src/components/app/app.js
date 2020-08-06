import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import Note from "../note";
import initialNotes from "../../notes";
import CreateArea from "../createArea";

const App = () => {
  const [notes, setNotes] = useState([...initialNotes]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <main>
        <CreateArea onAdd={addNote} />

        <div className="notes">
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;

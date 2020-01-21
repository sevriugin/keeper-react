import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

import defaultNotes from "./notes";

console.log(defaultNotes);

function App() {

  const [notes, setNotes] = useState([]);

  function addNew(note) {
    setNotes(prevNotes =>  [...prevNotes, note])
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea addNew={addNew}/>
      {notes.map(entry => (
        <Note key={entry.id} data={entry} deleteNote={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;

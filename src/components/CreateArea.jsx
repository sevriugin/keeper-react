/* eslint-disable react/prop-types */
import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({id: Math.floor(Math.random()* 1000), title:"", content:""});
  
  function onClick(event) {
    event.preventDefault();
    props.addNew(note);
    setNote({id: Math.floor(Math.random()* 1000), title:"", content:""});
  }
  function onChange({target:{name, value}}) {
    setNote(prevNote => ({...prevNote, [name]: value}));
  }
  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={note.title} onChange={onChange} name="title" placeholder="Title" />
        <textarea value={note.content} onChange={onChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={onClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

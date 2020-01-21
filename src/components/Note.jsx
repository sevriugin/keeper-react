/* eslint-disable react/prop-types */
import React from "react";

function Note(props) {

  function onClick(event) {
    event.preventDefault();
    props.deleteNote(props.data.id);
  }

  return (
    <div className="note">
      <h1>{props.data.title}</h1>
      <p>{props.data.content}</p>
      <button onClick={onClick}>DELETE</button>
    </div>
  );
}

export default Note;

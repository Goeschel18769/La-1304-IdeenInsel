import React from 'react';

function Note ({ note, onDelete }) {
  return (
    <div className="note">
      <p>{note.text}</p>
      <button onClick={() => onDelete(note.id)}>Löschen</button>
    </div>
  );
}

export default Note;
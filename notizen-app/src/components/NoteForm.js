import React, { useState } from 'react';

function NoteForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Schreibe eine tolle Idee für die Allgemeinheit..."
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}

export default NoteForm;
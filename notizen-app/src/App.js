import React, { useState, useEffect } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { db } from './firebase';
import { collection, addDoc, onSnapshot, orderBy, query, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'notes'), orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNotes(notesData);
    });

    return unsubscribe;
  }, []);

  const addNote = async (text) => {
    await addDoc(collection(db, 'notes'), {
      text,
      createdAt: serverTimestamp()
    });
  };

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, 'notes', id));
  };

  return (
    <div className="App">
      <h1> Ideeninsel</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;
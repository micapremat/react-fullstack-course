import { useState, useEffect } from "react";
import Note from "./Note";
import noteService from "../services/notes"

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true) 
  const hook = () => {
    noteService
      .getAll()
      .then(response => {
        setNotes(response)
      })
  }
  useEffect(hook, [])

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
        content: newNote,
        important: Math.random() < 0.5,
        id: notes.length + 1,
      }
      console.log(noteObject)
      noteService
        .createNote(noteObject)
        .then(response => {
          setNotes(notes.concat(response))
          setNewNote('')
        })
    
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportance = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important}
    noteService
      .updateNote(id, changedNote)
      .then(response => {
        setNotes(notes.map(n => n.id !== id ? n : response))
      })
      .catch(error => {
        alert(`the note ${note.content} was already deleted from server`)
        setNotes(note.filter(n => n.id !== id))
      })

  }

  return (
    <div>
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
          </button>
        </div>
        <ul>
          {notesToShow.map((note) => (
            <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)}/>
          ))}
        </ul>
        <form onSubmit={addNote}>
            <input value={newNote} onChange={handleNoteChange}/>
          <button type='submit'>save</button>
        </form>
      </div>
    </div>
  );
};
export default Notes;

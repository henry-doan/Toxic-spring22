import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';

export const NoteContext = React.createContext();

export const NoteConsumer = NoteContext.Consumer;

const NoteProvider = ({ children, user }) => {
  const [notes, setNotes] = useState([])

  const navigate = useNavigate();

  const getAllNotes = () => {
    axios.get(`/api/users/${user.id}/notes`)
      .then( res => setNotes(res.data) )
      .catch( err => console.log(err) )
  }


  const addNote = (newNote) => {
    let note = new FormData()
    note.append('image', newNote.image)
    note.append('title', newNote.title)
    note.append('body', newNote.body)
    axios.post(`/api/users/${user.id}/notes`,  note )
      .then( res => 
        setNotes([...notes, res.data]))
      .catch( err => console.log(err))
  }

  const updateNote = (id, newNote) => {
    let note = new FormData()
    note.append('image', newNote.image)
    note.append('title', newNote.title)
    note.append('body', newNote.body)
    axios.put(`/api/users/${user.id}/notes/${id}`,  note  )
      .then( res => {
        const newUpdatedNotes = notes.map( n => {
          if (n.id === id) {
            return res.data
          }
          return n
        })
        setNotes(newUpdatedNotes)
        navigate(`/notes`)
      })
      .catch( err => console.log(err))
  }

  const deleteNote = (id) => {
    axios.delete(`/api/users/${user.id}/notes/${id}`)
      .then( res => {
        setNotes(notes.filter( n => n.id !== id ))
        navigate('/notes')
      })
      .catch( err => console.log(err))
  }

 return (
   <NoteContext.Provider value={{
     notes, 
     getAllNotes: getAllNotes,
     addNote: addNote, 
     updateNote: updateNote,
     deleteNote: deleteNote,
   }}>
    { children }
   </NoteContext.Provider>
  )
}
const ConnectedNoteProvider = (props) => (
  <AuthConsumer>
    { value => <NoteProvider {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedNoteProvider;
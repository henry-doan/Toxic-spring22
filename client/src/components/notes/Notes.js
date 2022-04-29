import { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList'
import { Button } from 'react-bootstrap';
import { NoteConsumer } from '../../providers/NoteProvider';

const Notes = () => {
  const [adding, setAdd] = useState([])
  

  return(
  <div style={{flexDirection:"column"}}>
    <>
    <NoteForm 
    setAdd={setAdd}
    />
    </>
    <NoteList/>
  </div>
  )
}

const ConnectedNotes = (props) => (
  <NoteConsumer>
    { value => <Notes {...value} {...props} />}
  </NoteConsumer>
)

export default ConnectedNotes;
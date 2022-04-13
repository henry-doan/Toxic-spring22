import { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList'
import { Button } from 'react-bootstrap';
import { NoteConsumer } from '../../providers/NoteProvider';

const Notes = () => {
  const [adding, setAdd] = useState([])
  

  return(
  <>
  {
    adding ?
    <>
    <NoteForm 
    setAdd={setAdd}
    />
    <Button variant="warning" onClick={() => setAdd(false)}>Cancel</Button>
    </>
        :
    <Button onClick={() => setAdd(true)}>+</Button>
      }
    <h1>Notes</h1>
    <NoteList/>
  </>
  )
}

const ConnectedNotes = (props) => (
  <NoteConsumer>
    { value => <Notes {...value} {...props} />}
  </NoteConsumer>
)

export default ConnectedNotes;
import NoteShow from './NoteShow';
import { NoteConsumer } from '../../providers/NoteProvider';
import { useEffect } from 'react';

const NoteList = ({ notes, getAllNotes }) => {
  
  useEffect( () => {
    getAllNotes()
  }, [])


  return ( 
    <>
          { notes.map( n => 
              <NoteShow
                key={n.id}
                {...n}
              />  
          )}
    </>
  )
}

const ConnectedNoteList = (props) => (
  <NoteConsumer>
    { value => <NoteList {...value} {...props} /> }
  </NoteConsumer>
)

export default ConnectedNoteList;
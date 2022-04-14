import { useState } from 'react';
import { NoteConsumer } from '../../providers/NoteProvider';
import NoteForm from './NoteForm'
const NoteShow = ({ id, title, body, deleteNote }) => {
  const [editing, setEdit] = useState(false)
  // const [show, setShow] = useState(false);

  return (
    <>
      { editing ?
          <>
            <NoteForm
            title={title}
            body={body}
            id={id}
            setEdit={setEdit}
            />
            <button
              onClick={() => setEdit(false)}
            >
              Cancel
            </button>
          </>
        :
        <>
          <h2>{title}</h2>
          <h3>{body}</h3>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => deleteNote(id)}
          >
            Delete
          </button>
        </>
      }
    </>
  )
}

const ConnectedNoteShow = (props) => (
  <NoteConsumer>
    { value => <NoteShow {...value} {...props} />}
  </NoteConsumer>
)

export default ConnectedNoteShow;
import { useState } from 'react';
import { NoteConsumer } from '../../providers/NoteProvider';
import NoteForm from './NoteForm'
import { Image } from 'react-bootstrap';

const NoteShow = ({ id, title, body, deleteNote, image }) => {
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
          <Image src={image} width='200px' />
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
import { useState } from 'react';
import { NoteConsumer } from '../../providers/NoteProvider';
import NoteForm from './NoteForm'
import { Image, Button} from 'react-bootstrap';
import Moment from 'react-moment';
import { SideContainerNote, UploadImage } from '../styles/shared';

const NoteShow = ({ id, title, body, deleteNote, image, created_at}) => {
  const [editing, setEdit] = useState(false)
  // const [show, setShow] = useState(false);

  const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
  return (
    <>
      {/* { editing ?
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
        : */}
        <>
        <SideContainerNote>
          <Image src={defaultImage} width='85px' style={{float: 'left'}}  />
          <h5>Name</h5>
          <h6>
            Time posted: &nbsp; 
          <Moment format="LTS" >
            {created_at}
          </Moment>
          </h6>
          {/* <h2>{title}</h2> */}
          <UploadImage src={image}/> 
          <h3 style={{textAlign: 'center'}}>{body}</h3>
          {/* <button
            onClick={() => setEdit(true)}
            >
            Edit
          </button> */}
          <Button
          style={{float: 'right'}}
            onClick={() => deleteNote(id)}
            >
            Delete
          </Button>
            </SideContainerNote>
        </>
      {/* } */}
    </>
  )
}

const ConnectedNoteShow = (props) => (
  <NoteConsumer>
    { value => <NoteShow {...value} {...props} />}
  </NoteConsumer>
)

export default ConnectedNoteShow;
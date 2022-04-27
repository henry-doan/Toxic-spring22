import { useState } from 'react';
import { NoteConsumer } from '../../providers/NoteProvider';
import NoteForm from './NoteForm'
import { Image, Card } from 'react-bootstrap';
import Moment from 'react-moment';
import { MainContainer, SideContainer } from '../styles/shared';

const NoteShow = ({ id, title, body, deleteNote, image, created_at}) => {
  const [editing, setEdit] = useState(false)
  // const [show, setShow] = useState(false);

  const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
  return (
    < >
    <MainContainer>
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
        <SideContainer>
          <Image src={defaultImage}/>
          <h5>
            Time posted: &nbsp; 
          <Moment format="LTS" >
            {created_at}
          </Moment>
          </h5>
          {/* <h2>{title}</h2> */}
          <Image src={image} width='200px' /> 
          <h3>{body}</h3>
          {/* <button
            onClick={() => setEdit(true)}
            >
            Edit
          </button> */}
          <button
            onClick={() => deleteNote(id)}
            >
            Delete
          </button>
            </SideContainer>
        </>
      </MainContainer>
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
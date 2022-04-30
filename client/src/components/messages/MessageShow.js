import { useState } from 'react';
import { MessageConsumer } from '../../providers/MessageProvider';
import MessageForm from './MessageForm'
import { Image, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import { UploadImage, SideContainerMessage } from '../styles/shared';
const MessageShow = ({ id, title, body, deleteMessage, image, location, created_at}) => {
  const [editing, setEdit] = useState(false)
  // const [show, setShow] = useState(false);
  const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
  return (
    <>
      {/* { editing ?
          <>
            <MessageForm
            title={title}
            body={body}
            id={id}
            location={location}
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
        <SideContainerMessage>
        <Image src={defaultImage} width='85px' style={{float: 'left'}}  />
        <h5>Name</h5>
          <h6>
            Time posted: &nbsp; 
          <Moment format="LTS" >
            {created_at}
          </Moment>
          </h6>
          {/* <h2>{title}</h2> */}
          <UploadImage src={image} />
          <h5 style={{textAlign: 'center'}}>{body}</h5>
          <h5>Posted from: {location}</h5>
          {/* <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button> */}
          <Button
          style={{float: 'right'}}
            onClick={() => deleteMessage(id)}
          >
            Delete
          </Button>
         </SideContainerMessage>
        </>

      {/* } */}
    </>
  )
}

const ConnectedMessageShow = (props) => (
  <MessageConsumer>
    { value => <MessageShow {...value} {...props} />}
  </MessageConsumer>
)

export default ConnectedMessageShow;
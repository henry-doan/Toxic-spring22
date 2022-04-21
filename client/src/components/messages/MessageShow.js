import { useState } from 'react';
import { MessageConsumer } from '../../providers/MessageProvider';
import MessageForm from './MessageForm'
import { Image } from 'react-bootstrap';
import Moment from 'react-moment';

const MessageShow = ({ id, title, body, deleteMessage, image, location, created_at}) => {
  const [editing, setEdit] = useState(false)
  // const [show, setShow] = useState(false);

  return (
    <>

      { editing ?
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
        :
        <>
          <h5>
            Time posted: &nbsp; 
          <Moment format="LTS" >
            {created_at}
          </Moment>
          </h5>
          <h2>{title}</h2>
          <Image src={image} width='200px' />
          <h3>{body}</h3>
          <h5>{location}</h5>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => deleteMessage(id)}
          >
            Delete
          </button>
        </>
      }
    </>
  )
}

const ConnectedMessageShow = (props) => (
  <MessageConsumer>
    { value => <MessageShow {...value} {...props} />}
  </MessageConsumer>
)

export default ConnectedMessageShow;
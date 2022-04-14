import { useState } from 'react';
import { MessageConsumer } from '../../providers/MessageProvider';
import MessageForm from './MessageForm'
const MessageShow = ({ id, title, body, deleteMessage }) => {
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
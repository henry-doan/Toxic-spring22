import { useState } from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList'
import { Button } from 'react-bootstrap';
import { MessageConsumer } from '../../providers/MessageProvider';

const Messages = () => {
  const [adding, setAdd] = useState([])
  

  return(
  <>
  {
    adding ?
    <>
    <MessageForm 
    setAdd={setAdd}
    />
    <Button variant="warning" onClick={() => setAdd(false)}>Cancel</Button>
    </>
        :
    <Button onClick={() => setAdd(true)}>+</Button>
      }
    <MessageList/>
  </>
  )
}

const ConnectedMessages = (props) => (
  <MessageConsumer>
    { value => <Messages {...value} {...props} />}
  </MessageConsumer>
)

export default ConnectedMessages;
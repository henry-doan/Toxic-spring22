import { useState } from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList'
import { Button } from 'react-bootstrap';
import { MessageConsumer } from '../../providers/MessageProvider';

const Messages = () => {
  const [adding, setAdd] = useState([])
  

  return(
  <div style={{flexDirection:"column"}}>
    <>
    <MessageForm 
    setAdd={setAdd}
    />
    </>
    <MessageList/>
  </div>
  )
}

const ConnectedMessages = (props) => (
  <MessageConsumer>
    { value => <Messages {...value} {...props} />}
  </MessageConsumer>
)

export default ConnectedMessages;
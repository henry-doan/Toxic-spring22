import MessageShow from './MessageShow';
import { MessageConsumer } from '../../providers/MessageProvider';
import { useEffect } from 'react';

const MessageList = ({ messages, getAllMessages }) => {
  
  useEffect( () => {
    getAllMessages()
  }, [])


  return ( 
    <>
          { messages.map( m => 
              <MessageShow
                key={m.id}
                {...m}
              />  
          )}
    </>
  )
}

const ConnectedMessageList = (props) => (
  <MessageConsumer>
    { value => <MessageList {...value} {...props} /> }
  </MessageConsumer>
)

export default ConnectedMessageList;
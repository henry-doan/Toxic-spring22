import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';

export const MessageContext = React.createContext();

export const MessageConsumer = MessageContext.Consumer;

const MessageProvider = ({ children, user }) => {
  const [messages, setMessages] = useState([])

  const navigate = useNavigate();

  const getAllMessages = () => {
    axios.get(`/api/users/${user.id}/messages`)
      .then( res => setMessages(res.data) )
      .catch( err => console.log(err) )
  }


  const addMessage = (newMessage) => {
    let message = new FormData()
    message.append('image', newMessage.image)
    message.append('title', newMessage.title)
    message.append('body', newMessage.body)
    axios.post(`/api/users/${user.id}/messages`,  message )
      .then( res => 
        setMessages([...messages, res.data]))
      .catch( err => console.log(err))
  }

  const updateMessage = (id, newMessage) => {
    let message = new FormData()
    message.append('image', newMessage.image)
    message.append('title', newMessage.title)
    message.append('body', newMessage.body)
    axios.put(`/api/users/${user.id}/messages/${id}`, message  )
      .then( res => {
        const newUpdatedMessages = messages.map( m => {
          if (m.id === id) {
            return res.data
          }
          return m
        })
        setMessages(newUpdatedMessages)
        navigate(`/messages`)
      })
      .catch( err => console.log(err))
  }

  const deleteMessage = (id) => {
    axios.delete(`/api/users/${user.id}/messages/${id}`)
      .then( res => {
        setMessages(messages.filter( m => m.id !== id ))
        navigate('/messages')
      })
      .catch( err => console.log(err))
  }

 return (
   <MessageContext.Provider value={{
     messages, 
     getAllMessages: getAllMessages,
     addMessage: addMessage, 
     updateMessage: updateMessage,
     deleteMessage: deleteMessage,
   }}>
    { children }
   </MessageContext.Provider>
  )
}
const ConnectedMessageProvider = (props) => (
  <AuthConsumer>
    { value => <MessageProvider {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedMessageProvider;
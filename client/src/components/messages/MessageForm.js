import { useState, useEffect} from 'react';
import { MessageConsumer } from '../../providers/MessageProvider';
import { Form, Row, Col, Button} from 'react-bootstrap'
const MessageForm = ({ addMessage, setAdd, id, title, body, updateMessage, setEdit}) => {
  const [message, setMessage] = useState({ title: '', body: '' })


  useEffect( () => {
    if (id) {
      setMessage({ title, body })
    }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateMessage(id, message)
      setEdit(false)
    } else {
      addMessage(message)
      setAdd(false)
    }
    setMessage({ title: '', body: '' })

  }
  return (
    <>
      <h1>{ id ? 'Update' : 'Create' } Message</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control 
                name='title'
                value={message.title}
                onChange={(e) => setMessage({...message, title: e.target.value })}
                type="text" 
                placeholder="Subject of message" 
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control 
                name='body'
                value={message.body}
                onChange={(e) => setMessage({...message, body: e.target.value })}
                type="text" 
                placeholder="What's Happening?" 
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}
const ConnectedMessageForm = (props) => (
  <MessageConsumer>
    { value => <MessageForm {...props} {...value} />}
  </MessageConsumer>
)


export default ConnectedMessageForm;
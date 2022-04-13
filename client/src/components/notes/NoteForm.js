import { useState, useEffect} from 'react';
import { NoteConsumer } from '../../providers/NoteProvider';
import { Form, Row, Col, Button} from 'react-bootstrap'
const NoteForm = ({ addNote, setAdd, id, title, body, updateNote, setEdit}) => {
  const [note, setNote] = useState({ title: '', body: '' })


  useEffect( () => {
    if (id) {
      setNote({ title, body })
    }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(id, note)
      setEdit(false)
    } else {
      addNote(note)
      setAdd(false)
    }
    setNote({ title: '', body: '' })

  }
  return (
    <>
      <h1>{ id ? 'Update' : 'Create' } Note</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control 
                name='title'
                value={note.title}
                onChange={(e) => setNote({...note, title: e.target.value })}
                type="text" 
                placeholder="Title of Note" 
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control 
                name='body'
                value={note.body}
                onChange={(e) => setNote({...note, body: e.target.value })}
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
const ConnectedNoteForm = (props) => (
  <NoteConsumer>
    { value => <NoteForm {...props} {...value} />}
  </NoteConsumer>
)


export default ConnectedNoteForm;
import { useState, useEffect} from 'react';
import { ToxicConsumer } from '../../providers/ToxicProvider';
import { Form, Row, Col, Button} from 'react-bootstrap'
const ToxicForm = ({ addToxic, setAdd, id, desc, updateToxic, setEdit}) => {
  const [toxic, setToxic] = useState({ desc: '' })


  useEffect( () => {
    if (id) {
      setToxic({ desc })
    }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateToxic(id, toxic)
      setEdit(false)
    } else {
      addToxic(toxic)
      setAdd(false)
    }
    setToxic({ desc: '' })

  }
  return (
    <>
      <h1>{ id ? 'Update' : 'Create' } Tox!c</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control 
                name='desc'
                value={toxic.desc}
                onChange={(e) => setToxic({...toxic, desc: e.target.value })}
                type="text" 
                placeholder="Let it out bro." 
                required
              />
            </Form.Group>
          </Col>
          {/* <Col>
            <Form.Group className="mb-3">
              <Form.Control 
                name='images'
                value={toxic.images}
                onChange={(e) => setToxic({...toxic, images: e.target.value })}
                type="text"  
              />
            </Form.Group>
          </Col> */}
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}
const ConnectedToxicForm = (props) => (
  <ToxicConsumer>
    { value => <ToxicForm {...props} {...value} />}
  </ToxicConsumer>
)


export default ConnectedToxicForm;
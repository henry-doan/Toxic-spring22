import {useEffect, useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import { UserConsumer } from '../../provider/UserProvider';


const UserForm = ({name, user_name, follower_count, following_count, visitors, location, field }) => {
  const [user, setUser] = useState({user_name:'', name:'', following_count:'', followers_count:'', visitors:'', location:'', field:''})

  useEffect( () => {
    if (id) {
      setUser({user_name, name, following_count, followers_count, visitors, location, field})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
      setAdd(false)
    }
      setUser({user_name:'', name:'', following_count:'', followers_count:'', visitors:'', location:'', field:''4})
  }

  return (
    <>

    <Card style={{ width: '32rem' }}>
      <Card.Body>
      <h1>{ id ? "Update User" : "Create User"}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name='first_name'
            value={user.first_name}
            onChange={(e) => setUser({...user, first_name: e.target.value})}
            type="text" 
            placeholder="First Name"
            required
          />
          
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name='first_name'
            value={user.last_name}
            onChange={(e) => setUser({...user, last_name: e.target.value})}
            type="text" 
            placeholder="Last Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name='phone'
            value={user.phone}
            onChange={(e) => setUser({...user, phone: e.target.value})}
            type="text" 
            placeholder="Phone"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            name='notes'
            value={user.notes}
            onChange={(e) => setUser({...user, notes: e.target.value})}
            type="text" 
            placeholder="Notes"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Card.Body>
    </Card>
      
    </>
  )
}

const ConnectedUserForm = (props) => (
  <UserConsumer>
      {value => <UserForm {...props} {...value} /> }
  </UserConsumer>
)

export default ConnectedUserForm;
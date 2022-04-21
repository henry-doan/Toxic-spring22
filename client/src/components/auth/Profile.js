import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Row, Col, Image, Container, Button } from 'react-bootstrap';
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import axios from 'axios';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false)
  const [formVals, setFormValue] = useState({ fname: '', lname: '', age: 0, email: '', image: null })
  const [file, setFile] = useState()
  const [data, setData] = useState([])


  useEffect( () => {
    const { fname, lname, email, age, image, id } = user
    setFormValue({ fname, lname, email, age, image })
  }, [])

  const getAllUserItems = () => {
    axios.get(`/api/users/${user.id}`)
    .then( res => setData( () => {
      const profileData = []
      res.data.toxic.map( )
    } ))
  }

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setFormValue({ ...formVals, image: fileItems[0].file });
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setFormValue({ ...formVals, image: null });
  }

  const profileView = () => (
    <>
      <Col md="4">
        <Image src={user.image ? user.image : defaultImage} width='200px' />
      </Col>
      <Col md="8">
        <h1>Email: {user.email}</h1>
        <h1>Full Name: {user.fname} {user.lname}</h1>
        <h1>Age: {user.age}</h1>
      </Col>
    </>
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.id, formVals)
    setEditing(false)
    setFormValue({ ...formVals, image: null })
  }

  const editView = () => (
    <Form onSubmit={handleSubmit}>
      <Col md="4">
        <FilePond 
            files={file}
            onupdatefiles={handleFileUpdate}
            onremovefile={handleFileRemoved}
            allowMultiple={false}
            name='image'
            labelIdle='Drag and Drop your files or <span className="filePond--label-action">
              Browse
              </span>  
            '
        />
      </Col>
      <Col md="8">
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="First Name" 
            name='fname'
            value={formVals.fname}
            onChange={(e) => setFormValue({ ...formVals, fname: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Last Name" 
            name='lname'
            value={formVals.lname}
            onChange={(e) => setFormValue({ ...formVals, lname: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Email" 
            name='email'
            value={formVals.email}
            onChange={(e) => setFormValue({ ...formVals, email: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control 
            type="number" 
            name='age'
            value={formVals.age}
            onChange={(e) => setFormValue({ ...formVals, age: e.target.value })}
            required
          />
        </Form.Group>
        <Button type='submit'>Update</Button>
      </Col>
    </Form>
  )

  
  return (
    <Container>
      <h1>Profile</h1>
      <Row>
        { editing ? editView() : profileView() }
        <Col>
          <Button onClick={() =>  setEditing(!editing) }>
            { editing ? 'Cancel' : 'Edit' }
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedProfile;
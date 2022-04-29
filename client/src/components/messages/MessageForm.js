import { useState, useEffect} from 'react';
import { MessageConsumer } from '../../providers/MessageProvider';
import { Form, Row, Col, Button} from 'react-bootstrap'
import { SideContainerMessage } from '../styles/shared';
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

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const MessageForm = ({ addMessage, setAdd, id, title, body, updateMessage, setEdit, image, location}) => {
  const [message, setMessage] = useState({ title: '', body: '', image: null, location })
  const [file,setFile] = useState()

  useEffect( () => {
    if (id) {
      setMessage({ title, body, image, location })
    }
  }, [])

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setMessage({ ...message, image: fileItems[0].file });
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setMessage({ ...message, image: null });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateMessage(id, message)
      setEdit(false)
    } else {
      addMessage(message)
      setAdd(false)
    }
    setMessage({...message, image: null, title: '', body: '' })

  }
  return (
    <>
        <SideContainerMessage>
      {/* <h1>{ id ? 'Update' : 'Create' } Message</h1> */}
      <Form onSubmit={handleSubmit}>
        <Row>
        <Col>
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
            <Form.Group className="mb-3">
              <Form.Control 
                name='title'
                value={message.title}
                onChange={(e) => setMessage({...message, title: e.target.value })}
                type="text" 
                placeholder="Subject" 
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control 
                name='body'
                value={message.body}
                onChange={(e) => setMessage({...message, body: e.target.value })}
                type="text" 
                placeholder="Start a message" 
                required
              />
            </Form.Group>
            <Col>
            <Form.Group className="mb-3">
              <Form.Control 
                name='location'
                value={message.location}
                onChange={(e) => setMessage({...message, location: e.target.value })}
                type="text" 
                placeholder="Location" 
                required
              />
            </Form.Group>
          </Col>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </SideContainerMessage>
    </>
  )
}
const ConnectedMessageForm = (props) => (
  <MessageConsumer>
    { value => <MessageForm {...props} {...value} />}
  </MessageConsumer>
)


export default ConnectedMessageForm;
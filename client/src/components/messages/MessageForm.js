import { useState, useEffect} from 'react';
import { MessageConsumer } from '../../providers/MessageProvider';
import { Form, Row, Col, Button, Image} from 'react-bootstrap'
import { SideContainerMessage2 } from '../styles/shared';
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
  const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
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
        <SideContainerMessage2>
      {/* <h1>{ id ? 'Update' : 'Create' } Message</h1> */}
      <Form onSubmit={handleSubmit} >
      <Image src={defaultImage} width='85px' style={{float: 'left'}} />
        <Row>
        <Col>
            {/* <Form.Group className="mb-3">
              <Form.Control 
              style={{background: 'rgba(254, 179, 0, .3)', border: 'none'}}
                name='title'
                value={message.title}
                onChange={(e) => setMessage({...message, title: e.target.value })}
                type="text" 
                placeholder="Subject" 
                required
              />
            </Form.Group> */}
            <Form.Group className="mb-3">
              <Form.Control 
                style={{background: 'rgba(254, 179, 0, .3)', border: 'none'}}
                name='body'
                value={message.body}
                onChange={(e) => setMessage({...message, body: e.target.value })}
                type="text" 
                placeholder="What do you want to say?" 
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control 
              style={{background: 'rgba(254, 179, 0, .3)', border: 'none'}}
                name='location'
                value={message.location}
                onChange={(e) => setMessage({...message, location: e.target.value })}
                type="text" 
                placeholder="Where are you posting from?" 
                required
              />
            </Form.Group>
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
        </Row>
        <Button variant="primary" type="submit" style={{float: 'right'}}>
          Submit
        </Button>
      </Form>
      </SideContainerMessage2>
    </>
  )
}
const ConnectedMessageForm = (props) => (
  <MessageConsumer>
    { value => <MessageForm {...props} {...value} />}
  </MessageConsumer>
)


export default ConnectedMessageForm;
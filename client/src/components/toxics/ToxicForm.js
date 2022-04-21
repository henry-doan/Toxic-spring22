import { useState, useEffect} from 'react';
import { ToxicConsumer } from '../../providers/ToxicProvider';
import { Form, Row, Col, Button} from 'react-bootstrap'

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

const ToxicForm = ({ addToxic, setAdd, id, desc, updateToxic, setEdit, image, location, deletes_in}) => {
  const [toxic, setToxic] = useState({ desc: '', image: null, location: '', deletes_in: 1  })
  const [file, setFile] = useState()
  
  useEffect( () => {
    if (id) {
      setToxic({ desc, location, deletes_in, image })
    }
  }, [])

  // useEffect( () => {
  //   if ()
  // })

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setToxic({ ...toxic, image: fileItems[0].file });
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setToxic({ ...toxic, image: null });
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateToxic(id, toxic)
      setEdit(false)
    } else {
      addToxic(toxic)
      setAdd(false)
    }
    setToxic({ ...toxic, image: null, desc: '', deletes_in: 1, location: '' })

  }
  
  return (
    <>
      <h1>{ id ? 'Update' : 'Create' } Tox!c</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
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
          <Col>
            <Form.Group className="mb-3">
              <Form.Control 
                name='deletes_in'
                value={toxic.deletes_in}
                onChange={(e) => setToxic({...toxic, deletes_in: e.target.value })}
                type="number"
                required 
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control 
                name='location'
                value={toxic.location}
                onChange={(e) => setToxic({...toxic, location: e.target.value })}
                type="text" 
                placeholder="Location" 
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
const ConnectedToxicForm = (props) => (
  <ToxicConsumer>
    { value => <ToxicForm {...props} {...value} />}
  </ToxicConsumer>
)


export default ConnectedToxicForm;
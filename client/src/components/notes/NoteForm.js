import { useState, useEffect} from 'react';
import { NoteConsumer } from '../../providers/NoteProvider';
import { Form, Row, Col, Button, Image} from 'react-bootstrap'
import {SubButton, SideContainerNote2} from '../styles/shared';
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

const NoteForm = ({ addNote, setAdd, id, title, body, updateNote, setEdit, image}) => {
  const [note, setNote] = useState({ title: '', body: '', image: null })
  const [file, setFile] = useState()
  const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
  useEffect( () => {
    if (id) {
      setNote({ title, body, image })
    }
  }, [])


  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setNote({ ...note, image: fileItems[0].file });
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setNote({ ...note, image: null });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(id, note)
      setEdit(false)
    } else {
      addNote(note)
      setAdd(false)
    }
    setNote({...note, image: null, title: '', body: '' })

  }
  return (
    <>
        <SideContainerNote2>
          {/* <h1>{ id ? 'Update' : 'Create' } Note</h1> */}
          <Form onSubmit={handleSubmit}>
            <Image src={defaultImage} width='85px' style={{float: 'left'}} />
            <Row>
            <Col>
                {/* <Form.Group className="mb-3">
                  <Form.Control 
                  name='title'
                  value={note.title}
                  onChange={(e) => setNote({...note, title: e.target.value })}
                  type="text" 
                  placeholder="Title of Note" 
                  required
                  className="me-auto"
                  />
                </Form.Group> */}
                <Form.Group className="mb-3">
                  <Form.Control 
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.2)',border: 'none'}}
                    name='body'
                    value={note.body}
                    onChange={(e) => setNote({...note, body: e.target.value })}
                    type="text" 
                    placeholder="What do you want to say?" 
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
            <SubButton variant="primary" type="submit">
              Submit
            </SubButton>
          </Form> 
      </SideContainerNote2>
    </>
  )
}
const ConnectedNoteForm = (props) => (
  <NoteConsumer>
    { value => <NoteForm {...props} {...value} />}
  </NoteConsumer>
)


export default ConnectedNoteForm;
import { useState, useEffect} from 'react';
import { ToxicConsumer } from '../../providers/ToxicProvider';
import { Form, Row, Col, Button, Image} from 'react-bootstrap'


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
import { SubButton, SideContainerToxic2, SideContainerToxic3 } from '../styles/shared';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const ToxicForm = ({ addToxic, setAdd, id, desc, updateToxic, setEdit, image, location, deletes_in}) => {
  const [toxic, setToxic] = useState({ desc: '', image: null, location: '', deletes_in: 1  })
  const [file, setFile] = useState()
  const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
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
        <SideContainerToxic2>
      <Form onSubmit={handleSubmit} >
      <Image src={defaultImage} width='85px' style={{float: 'left'}} />
        <Row >
        <Col >
            <Form.Group className="mb-3">
              <Form.Control 
              style={{backgroundColor: 'rgba(108, 145, 194, 0.3)',border: 'none'}}
                name='desc'
                value={toxic.desc}
                onChange={(e) => setToxic({...toxic, desc: e.target.value })}
                type="text" 
                placeholder="What do you want to say?" 
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control 
              style={{backgroundColor: 'rgba(108, 145, 194, 0.3)', border: 'none', color: 'white'}}
                name='deletes_in'
                value={toxic.deletes_in}
                onChange={(e) => setToxic({...toxic, deletes_in: e.target.value })}
                type="number"
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control 
              style={{backgroundColor: 'rgba(108, 145, 194, 0.3)', border: 'none'}}
                name='location'
                value={toxic.location}
                onChange={(e) => setToxic({...toxic, location: e.target.value })}
                type="text" 
                placeholder="Where are you posting from?" 
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
      </SideContainerToxic2>
    </>
  )
}
const ConnectedToxicForm = (props) => (
  <ToxicConsumer>
    { value => <ToxicForm {...props} {...value} />}
  </ToxicConsumer>
)


export default ConnectedToxicForm;
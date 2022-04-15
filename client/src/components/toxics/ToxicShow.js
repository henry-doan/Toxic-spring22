import { useState } from 'react';
import { ToxicConsumer } from '../../providers/ToxicProvider';
import ToxicForm from './ToxicForm'
import { Image } from 'react-bootstrap';

const ToxicShow = ({ id, desc, deleteToxic, image}) => {
  const [editing, setEdit] = useState(false)
  // const [show, setShow] = useState(false);

  // const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
  return (
    <>

      <h1>Tox!c</h1>
      { editing ?
          <>
            <ToxicForm
            desc={desc}
            id={id}
            setEdit={setEdit}
            
            />
            <button
              onClick={() => setEdit(false)}
            >
              Cancel
            </button>
          </>
        :
        <>
          <Image src={image} width='200px' />
          <h3>{desc}</h3>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => deleteToxic(id)}
          >
            Delete
          </button>
        </>
      }
    </>
  )
}

const ConnectedToxicShow = (props) => (
  <ToxicConsumer>
    { value => <ToxicShow {...value} {...props} />}
  </ToxicConsumer>
)

export default ConnectedToxicShow;
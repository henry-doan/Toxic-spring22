import { useState } from 'react';
import { ToxicConsumer } from '../../providers/ToxicProvider';
import ToxicForm from './ToxicForm'
const ToxicShow = ({ id, desc, deleteToxic }) => {
  const [editing, setEdit] = useState(false)
  // const [show, setShow] = useState(false);

  return (
    <>

      <h1>title</h1>
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
          <h3>toxic</h3>
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
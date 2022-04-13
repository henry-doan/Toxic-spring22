import { useState } from 'react';
import ToxicForm from './ToxicForm';
import ToxicList from './ToxicList'
import { Button } from 'react-bootstrap';
import { ToxicConsumer } from '../../providers/ToxicProvider';

const Toxics = () => {
  const [adding, setAdd] = useState([])
  

  return(
  <>
  {
    adding ?
    <>
    <ToxicForm 
    setAdd={setAdd}
    />
    <Button variant="warning" onClick={() => setAdd(false)}>Cancel</Button>
    </>
        :
    <Button onClick={() => setAdd(true)}>+</Button>
      }
    <h1>Toxics</h1>
    <ToxicList/>
  </>
  )
}

const ConnectedToxics = (props) => (
  <ToxicConsumer>
    { value => <Toxics {...value} {...props} />}
  </ToxicConsumer>
)

export default ConnectedToxics;
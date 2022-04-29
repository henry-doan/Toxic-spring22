import { useState } from 'react';
import ToxicForm from './ToxicForm';
import ToxicList from './ToxicList'
import { Button } from 'react-bootstrap';
import { ToxicConsumer } from '../../providers/ToxicProvider';

const Toxics = () => {
  const [adding, setAdd] = useState([])
  

  return(
  <div style={{flexDirection:"column"}}>
    <>
    <ToxicForm 
    setAdd={setAdd}
    />
    </>
    <ToxicList/>
  </div>
  )
}

const ConnectedToxics = (props) => (
  <ToxicConsumer>
    { value => <Toxics {...value} {...props} />}
  </ToxicConsumer>
)

export default ConnectedToxics;
import ToxicShow from './ToxicShow';
import { ToxicConsumer } from '../../providers/ToxicProvider';
import { useEffect } from 'react';

const ToxicList = ({ toxics, getAllToxics }) => {
  
  useEffect( () => {
    getAllToxics()
  }, [])


  return ( 
    <>
      <h1>My Toxics</h1>
          { toxics.map( t => 
              <ToxicShow
                key={t.id}
                {...t}
              />  
          )}
    </>
  )
}

const ConnectedToxicList = (props) => (
  <ToxicConsumer>
    { value => <ToxicList {...value} {...props} /> }
  </ToxicConsumer>
)

export default ConnectedToxicList;
import ToxicShow from './ToxicShow';
import { ToxicConsumer } from '../../providers/ToxicProvider';
import { useEffect } from 'react';

const ToxicList = ({ toxics, getAllToxics }) => {
  
  useEffect( () => {
    getAllToxics()
  }, [])


  return ( 
    <>
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
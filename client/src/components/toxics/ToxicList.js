import ToxicShow from './ToxicShow';
import { ToxicConsumer } from '../../providers/ToxicProvider';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const ToxicList = ({ toxics, getAllToxics}) => {
  
  useEffect( () => {
    getAllToxics()
  }, [])


  return ( 
    <>
        <Container>
          <Row>
          { toxics.map( t => 
            <Col>
              
              <ToxicShow
              key={t.id}
              {...t}
              />  
            </Col>
          )}
          </Row>
        </Container>
    </>
  )
}

const ConnectedToxicList = (props) => (
  <ToxicConsumer>
    { value => <ToxicList {...value} {...props} /> }
  </ToxicConsumer>
)

export default ConnectedToxicList;
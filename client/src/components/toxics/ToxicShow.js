import { useState, useEffect} from 'react';
import { ToxicConsumer } from '../../providers/ToxicProvider';
import ToxicForm from './ToxicForm';
import { Image, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import moment from 'moment';
import { UploadImage,SideContainerToxic } from '../styles/shared';



const ToxicShow = ({ id, desc, deleteToxic, image, deletes_in, created_at, location}) => {
  const [editing, setEdit] = useState(false)
  const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
  useEffect( () => {
    if (id) {
      let duration = moment.duration({'minutes': deletes_in});
      let timeExpired = moment(created_at).add(duration);
      if ( moment().format('hh:mm') >= timeExpired.format('hh:mm')) {
        deleteToxic(id)
      } 
    }
  }, [])
  
  return (
    <>
       
      {/* { editing ?

              <>
              <div>
                <ToxicForm
                desc={desc}
                id={id}
                deletes_in={deletes_in}
                location={location}
                setEdit={setEdit}
                />
                <button
                  onClick={() => setEdit(false)}
                >
                  Cancel
                </button>
                </div>
              </>

   
        : */}
        <>
        <SideContainerToxic>
          <Image src={defaultImage} width='85px' style={{float: 'left'}}  />
              <h5>Name</h5>
              <h6>
                Time posted: &nbsp; 
              <Moment format="LTS" >
                {created_at}
              </Moment>
              </h6>
              <UploadImage src={image}/> 
            <h3 style={{textAlign: 'center'}}>{desc}</h3>
            <h4>{location}</h4>
              {/* <button
                onClick={() => setEdit(true)}
              >
                Edit
              </button> */}
              <Button
              style={{float: 'right'}}
                onClick={() => deleteToxic(id)}
              >
                Delete
              </Button>
 
          </SideContainerToxic>
        </>
      
      {/* } */}
    </>
  )
}

const ConnectedToxicShow = (props) => (
  <ToxicConsumer>
    { value => <ToxicShow {...value} {...props} />}
  </ToxicConsumer>
)

export default ConnectedToxicShow;
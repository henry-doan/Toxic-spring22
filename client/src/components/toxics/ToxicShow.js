import { useState, useEffect} from 'react';
import { ToxicConsumer } from '../../providers/ToxicProvider';
import ToxicForm from './ToxicForm';
import { Image } from 'react-bootstrap';
import Moment from 'react-moment';
import moment from 'moment';



const ToxicShow = ({ id, desc, deleteToxic, image, deletes_in, created_at, location}) => {
  const [editing, setEdit] = useState(false)
  
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
      { editing ?
          <>
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
          </>
        :
        <>
          <h5>
            Time posted: &nbsp; 
          <Moment format="LTS" >
            {created_at}
          </Moment>
          </h5>
          <Image src={image} width='200px' />
         <h3>{desc}</h3>
         <h4>{location}</h4>
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
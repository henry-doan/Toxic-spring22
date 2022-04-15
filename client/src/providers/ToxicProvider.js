import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';

export const ToxicContext = React.createContext();

export const ToxicConsumer = ToxicContext.Consumer;

const ToxicProvider = ({ children, user }) => {
  const [toxics, setToxics] = useState([])

  const navigate = useNavigate();

  const getAllToxics = () => {
    axios.get(`/api/users/${user.id}/toxics`)
      .then( res => setToxics(res.data) )
      .catch( err => console.log(err) )
  }


  const addToxic = (newToxic) => {
    let toxic = new FormData()
    toxic.append('image', newToxic.image)
    // data.append('deletes_in', toxic.deletes_in)
    toxic.append('desc', newToxic.desc)
    // data.append('location', toxic.location)
    axios.post(`/api/users/${user.id}/toxics`,  toxic )
      .then( res => 
        setToxics([...toxics, res.data]))
      .catch( err => console.log(err))
  }

  const updateToxic = (id, toxic) => {
    let data = new FormData()
    data.append('file', toxic.image)
    // data.append('deletes_in', toxic.deletes_in)
    data.append('desc', toxic.desc)
    // data.append('location', toxic.location)
    axios.put(`/api/users/${user.id}/toxics/${id}`,  data )
      .then( res => {
        const newUpdatedToxics = toxics.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setToxics(newUpdatedToxics)
        navigate(`/toxics`)
      })
      .catch( err => console.log(err))
  }

  const deleteToxic = (id) => {
    axios.delete(`/api/users/${user.id}/toxics/${id}`)
      .then( res => {
        setToxics(toxics.filter( t => t.id !== id ))
        navigate('/toxics')
      })
      .catch( err => console.log(err))
  }

 return (
   <ToxicContext.Provider value={{
     toxics, 
     getAllToxics: getAllToxics,
     addToxic: addToxic, 
     updateToxic: updateToxic,
     deleteToxic: deleteToxic,
   }}>
    { children }
   </ToxicContext.Provider>
  )
}
const ConnectedToxicProvider = (props) => (
  <AuthConsumer>
    { value => <ToxicProvider {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedToxicProvider;
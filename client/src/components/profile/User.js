import { useState } from 'react';
import ProfileList from './ProfileList';
import ProfileForm from './ProfileForm';
import { Button } from 'react-bootstrap';


const Profiles = () => {

  const [adding, setAdd] =useState(false)

  return (
    <>
      { adding ? 
        <>
          <ProfileForm 
            setAdd={setAdd}
          />
          <Button onClick={() => setAdd(false)}>Cancel</Button>
        </>
        :
        <Button onClick={() => setAdd(true)}>+</Button>
      }

      <h1>All Users</h1>
      <ProfileList />
    </>
  )
}

export default Profiles;
import { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import { Button } from 'react-bootstrap';


const Users = () => {

  const [adding, setAdd] =useState(false)

  return (
    <>
      { adding ? 
        <>
          <UserForm 
            setAdd={setAdd}
          />
          <Button onClick={() => setAdd(false)}>Cancel</Button>
        </>
        :
        <Button onClick={() => setAdd(true)}>+</Button>
      }

      <h1>All Users</h1>
      <UserList />
    </>
  )
}

export default Profiles;
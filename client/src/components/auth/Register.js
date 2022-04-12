import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";

const Register = ({ handleRegister }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '' }) 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      handleRegister(user);
     } else {
      alert('Passwords Do Not Match!')
     }
  }
  
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <label>Name</label>
        <input
          type="name"
          required
          autoFocus
          name='name'
          value={user.name}
          placeholder='Name'
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label>Profile Name</label>
        <input
          type="profile_name"
          required
          autoFocus
          name='profile_name'
          value={user.profile_name}
          placeholder='Profile Name'
          onChange={(e) => setUser({ ...user, profile_name: e.target.value })}
        />
        <label>Email</label>
        <input
          type="email"
          required
          autoFocus
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>Password</label>
        <input
          required
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <label>Password Confirmation</label>
        <input
          required
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          placeholder='Password Confirmation'
          type='password'
          onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register { ...props } {...value} /> }
  </AuthConsumer>
)

export default ConnectedRegister;
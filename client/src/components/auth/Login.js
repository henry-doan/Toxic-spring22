import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Form , Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {MainBtn, LoginForm} from '../styles/shared'
import Logo from '../../images/Logo.svg';
const Login = ({ handleLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' })
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  }
  return (
    <>
      
      {/* <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          autoFocus
          required
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
        <button type='submit'>Submit</button>
      </form> */}
      <LoginForm >
        <h1 style={{fontSize: '26px', textAlign: 'center', color: 'black'}}>Join Tox!c Today</h1>
        <p style={{fontSize: '16px', textAlign: 'center', color: 'black'}}>Join TOX!C and start feeling better today</p>
     <Form onSubmit={handleSubmit} >
  <Form.Group className="sm" controlId="formBasicEmail">
    <Form.Label style={{color:'white'}}>Email address</Form.Label>
    <Form.Control
          type="email"
          autoFocus
          required
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:'white'}}>Password</Form.Label>
    <Form.Control required
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e) => setUser({ ...user, password: e.target.value })} />
  </Form.Group>
  <MainBtn  type="submit">
    Login
  </MainBtn>
  <MainBtn>
  <Link to='/register' style={{textDecoration: 'none', color: 'white'}}>
    Register
  </Link>
  </MainBtn>
</Form>
</LoginForm>
<Image width="600px"src={Logo} style={{float: 'right', marginRight: '65px'}}/>
    </>
  )
}
const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)
export default ConnectedLogin;
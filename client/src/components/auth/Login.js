import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Container, Form, Button } from 'react-bootstrap';
import { MainBtn, H1 } from '../styles/shared';
const Login = ({ handleLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' })
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  }
  return (
    <>
     {/* <Container>
      <h1 style={{textAlign:'center'}}>Login</h1>
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
        <button type='submit'>Get Started</button>
      </form>
    </Container> */}
     <div class="d-flex flex-row-reverse">
     <Form onSubmit={handleSubmit} class="p-2" style={{marginRight:'60px', marginTop:'100px'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
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
    <Form.Label>Password</Form.Label>
    <Form.Control required
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e) => setUser({ ...user, password: e.target.value })} />
  </Form.Group>
  <MainBtn  type="submit">
    Submit
  </MainBtn>
</Form>
</div>
    </>
  )
}
const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)
export default ConnectedLogin;
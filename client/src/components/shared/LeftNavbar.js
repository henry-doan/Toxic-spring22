import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import { Button, Image,Row, Col, Container} from 'react-bootstrap';
import Logo from '../../images/Logo.svg';
import { LeftNav, NavImage } from "../styles/shared";



  

const LNavbar = ({user, handleLogout }) => {
  
  const leftNavItems = () => {
    // links to show up when logged in
    if (user) {
      return (
        <>
        <Container >
          <nav>
                  <LeftNav>
                <Link to='/toxics'>
                  <NavImage src={Logo} />
                </Link>
                
                  <br/>
                  <br/>

                  <Link to='/toxics'>
                  <h1>Home</h1>
                  </Link>
                  <br/>
                  <br/>
                  <Link to='/profile'>
                  <h1>Profile</h1>
                  </Link>
                  <br/>
                  <br/>
                  <Link to='/teams'>
                  <h1>Team</h1>
                  </Link>
                  <br/>
                  <br/>
                  <h1 onClick={ () => handleLogout() }>
                    Logout
                  </h1>
                  <br/>
                  <br/>
                </LeftNav>
                
          </nav>
        
</Container>
        
        </>
      )
    } else {
      // links to show up when Not logged in
      return (
        <>
          <Link to='/home'>
            <li>
              Home Landing
            </li>
          </Link>
          <Link to='/login'>
            <li style={{color:'red'}}>
              Login
            </li>
          </Link>
          <Link to='/register'>
            <li>
              Register
            </li>
          </Link>
        </>
      )
    }
  }
  
  // links that show up regardless of login or out
  return (
    <>
      
        
          
            { leftNavItems() }
        
      
    </>
  )
}

const ConnectedLNavbar = (props) => (
  <AuthConsumer> 
    { value => <LNavbar { ...props } { ...value } /> }
  </AuthConsumer>
)
 
export default ConnectedLNavbar;
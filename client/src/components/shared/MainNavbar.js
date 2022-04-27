import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import { Button, Image,Row, Col, Container} from 'react-bootstrap';
import Logo from '../../images/Logo.svg';
import tCom from '../../images/tCom.svg';
import tNot from '../../images/tNot.svg';
import { MainBtn } from "../styles/shared";

  // import { Form } from "react-bootstrap";
// import MainNavbar from 'react-bootstrap';

const MainNavbar = ({user, handleLogout }) => {
  
  const rightNavItems = () => {
    // links to show up when logged in
    if (user) {
      return (
        <>
         
       

        <Container>
   <Row>
    <Col>
    <Button>
        <Link to='/toxics'>
          <Image src={Logo} width="144px" height="128px"/>
        </Link>
        </Button>
           <Link to='/profile'>
            <li>
            Profile
             {/* <img src={user.image} />  */}
             </li>
          </Link>
            <li onClick={ () => handleLogout() }>
              Logout
            </li> 
    </Col>
    <Col>
          <Button>
          <Link to='/messages'>
          <Image src={tCom} width="144px" height="128px"/>
          </Link>
         </Button> 
              
    </Col>
    <Col>
          <Button>
          <Link to='/notes'>
          <Image src={tNot} width="144px" height="128px"/>
          </Link>
          </Button>
        
    </Col>
  </Row>
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
      <nav>
        
          
            { rightNavItems() }
        
      </nav>
    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer> 
    { value => <MainNavbar { ...props } { ...value } /> }
  </AuthConsumer>
)
 
export default ConnectedMainNavbar;
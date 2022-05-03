import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import { Navbar,Nav, Container} from 'react-bootstrap';
import tCom from '../../images/tCom.svg';
import tNot from '../../images/tNot.svg';
import { RightNav1, RightNav2, NavImage } from "../styles/shared";


  

const MainNavbar = ({user, handleLogout }) => {
  
  const rightNavItems = () => {
    // links to show up when logged in
    if (user) {
      return (
        <>
        <Container >
          
          <nav>
                  <RightNav1>
                  <Link to='/notes'>
                    <NavImage src={tNot}/>
                  </Link>
                  </RightNav1>
               
                    <RightNav2>
                  <Link to='/messages'>
                    <NavImage src={tCom}/>
                  </Link>
                  </RightNav2>    
          </nav>
        
</Container>
        
        </>
      )
    } else {
      // links to show up when Not logged in
      return (
        <>
          {/* <Link to='/home'>
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
          </Link> */}
          {/* <Navbar style={{height:'40px', backgroundColor:'black',marginRight: '10px', marginTop: '10px'}} collapseOnSelect expand="sm" >
  <Container >
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link style={{color:'orange', fontSize:'12px'}} href="/login"> LOGIN</Nav.Link>
      <Nav.Link  style={{color:'orange',fontSize:'12px'}}href="/register">SIGN UP</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> */}
        </>
      )
    }
  }
  
  // links that show up regardless of login or out
  return (
    <>
      
        
          
            { rightNavItems() }
        
      
    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer> 
    { value => <MainNavbar { ...props } { ...value } /> }
  </AuthConsumer>
)
 
export default ConnectedMainNavbar;
import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import { Button, Image, Nav, Navbar, Container} from 'react-bootstrap';
import Logo from '../../images/Logo.png';
import tCom from '../../images/tCom.png';
import tNot from '../../images/tNot.png';
import { MainBtn } from "../styles/shared";

  // import { Form } from "react-bootstrap";
// import MainNavbar from 'react-bootstrap';

const MainNavbar = ({user, handleLogout }) => {
  
  const rightNavItems = () => {
    // links to show up when logged in
    if (user) {
      return (
        <>
           {/* <Link to='/profile'>
            <li>
            Profile */}
             {/* <img src={user.image} />  */}
             {/* </li>
          </Link>
          <Button>
          <Link to='/toxics'>
            <Image src={Logo} width="144px" height="128px"/>
          </Link>
          </Button>

          <Button>
          <Link to='/notes'>
           <Image src={tNot}/>
          </Link>
          </Button>

          <Button>
          <Link to='/messages'>
          <Image src={tCom} width="144px" height="128px"/>
          </Link>
          // </Button> */}
          {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/toxics">Toxic</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/notes">Notes</Nav.Link>
              <Nav.Link href="/messages">Messages</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
            <li onClick={ () => handleLogout() }>
              Logout
            </li>  */}
            <Navbar style={{height:'3rem'}} collapseOnSelect expand="sm" bg="dark" variant="dark" >
  <Container >
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" >
    </Nav>
    <Nav >
      <Nav.Link style={{color:'orange', fontSize:'12px'}} href="/toxics"> Toxic</Nav.Link>
      <Nav.Link  style={{color:'orange',fontSize:'12px'}}href="/notes">Notes</Nav.Link>
      <Nav.Link  style={{color:'orange',fontSize:'12px'}}href="/messages">Messages</Nav.Link>
      <Nav.Link  style={{color:'orange',fontSize:'12px'}}href="/profile">My Profile</Nav.Link>
      <MainBtn onClick={ () => handleLogout() } style={{color:'orange',fontSize:'12px'}}href="/login">Logout </MainBtn>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
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
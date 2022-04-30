// import { AuthConsumer } from "../../providers/AuthProvider";
// import { Link } from 'react-router-dom';
// import { Button, Image} from 'react-bootstrap';
// import Logo from '../../images/Logo.png';
// import tCom from '../../images/tCom.png';
// import tNot from '../../images/tNot.png';
//   // import { Form } from "react-bootstrap";
// // import MainNavbar from 'react-bootstrap';

// const MainNavbar = ({user, handleLogout }) => {
  
//   const rightNavItems = () => {
//     // links to show up when logged in
//     if (user) {
//       return (
//         <>
//           {/* <Link to='/profile'>
//             <li>
//             Profile
//             <img src={user.image} />
//             </li>
//           </Link> */}
//           <Button>
//           <Link to='/toxics'>
//             <Image src={Logo} width="144px" height="128px"/>
//           </Link>
//           </Button>
//           <Button>
//           <Link to='/notes'>
//            <Image src={tNot}/>
//           </Link>
//           </Button>
//           <Button>
//           <Link to='/messages'>
//           <Image src={tCom} width="144px" height="128px"/>
//           </Link>
//           </Button>
//             <li onClick={ () => handleLogout() }>
//               Logout
//             </li>
//         </>
//       )
//     } else {
//       // links to show up when Not logged in
//       return (
//         <>
//           <Link to='/home'>
//             <li>
//               Home Landing
//             </li>
//           </Link>
//           <Link to='/login'>
//             <li style={{color:'red'}}>
//               Login
//             </li>
//           </Link>
//           <Link to='/register'>
//             <li>
//               Register
//             </li>
//           </Link>
//         </>
//       )
//     }
//   }
  
//   // links that show up regardless of login or out
//   return (
//     <>
//       <nav>
        
          
//             { rightNavItems() }
        
//       </nav>
//     </>
//   )
// }

// const ConnectedMainNavbar = (props) => (
//   <AuthConsumer> 
//     { value => <MainNavbar { ...props } { ...value } /> }
//   </AuthConsumer>
// )
 
// export default ConnectedMainNavbar;

import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Button, Image,Row, Col, Container} from 'react-bootstrap';
import tCom from '../../images/tCom.svg';
import tNot from '../../images/tNot.svg';
import { RightNav1, RightNav2, NavImage } from "../styles/shared";


  

=======
import { Button, Navbar, Nav ,Container} from 'react-bootstrap';
import { NavLink, MainBtn } from "../styles/shared";
// import Logo from '../../images/Logo.png';
// import tCom from '../../images/tCom.png';
// import tNot from '../../images/tNot.png';
//    import { Form } from "react-bootstrap";
>>>>>>> 88aa9a0 (log in)
const MainNavbar = ({user, handleLogout }) => {
  const rightNavItems = () => {
    // links to show up when logged in
    if (user) {
      return (
        <>
<<<<<<< HEAD
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
        
=======
             {/* <Link to='/profile'>
            <li>
            Profile
            <img src={user.image} />
            </li>
          </Link>
          <Button>
          <Link to='/toxics'>
            TOxic
            {/* <Image src={Logo} width="144px" height="128px"/> */}
          {/* </Link>
          </Button>
          <Button>
          <Link to='/notes'>
            <Image src={tNot}/>
           Notes
          </Link>
          </Button>
          <Button>
          <Link to='/messages'>
            messages
           <Image src={tCom} width="144px" height="128px"/>
          </Link>
          </Button>
            <li onClick={ () => handleLogout() }>
              Logout
            </li>   */}
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
>>>>>>> 88aa9a0 (log in)
        </>
      )
    } else {
      // links to show up when Not logged in
      return (
        <>
       {/* <NavigationItems >
            <NavItems to='/' style={{width:'30px',marginLeft:'10px'}}>Logo</NavItems>
            <Link to='/login'>
            <NavItems style={{marginLeft:'35rem'}}>Login</NavItems>
            </Link>
          </NavigationItems >
          <NavigationItems >
            <Link to='/register'>
            <NavItems>Sing Up</NavItems>
            </Link>
          </NavigationItems >
          <MainBtn>Demo</MainBtn>  */}
           <Navbar style={{height:'3rem'}} collapseOnSelect expand="sm" bg="dark" variant="dark">
  <Container >
  <Navbar.Brand style={{color:'orange',fontSize:'12px'}} href="#home">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link style={{color:'orange', fontSize:'12px'}} href="/login"> LOGIN</Nav.Link>
      <Nav.Link  style={{color:'orange',fontSize:'12px'}}href="/register">SIGN UP</Nav.Link>
      <MainBtn href="/login"> DEMO </MainBtn>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
      )
    }
  }
  // links that show up regardless of login or out
  return (
    <>
<<<<<<< HEAD
      
        
          
            { rightNavItems() }
        
      
=======
            { rightNavItems() }
>>>>>>> 88aa9a0 (log in)
    </>
  )
}
const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar { ...props } { ...value } /> }
  </AuthConsumer>
)
export default ConnectedMainNavbar;
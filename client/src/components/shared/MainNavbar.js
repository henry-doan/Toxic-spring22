import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
// import MainNavbar from 'react-bootstrap';

const MainNavbar = ({user, handleLogout }) => {
  
  const rightNavItems = () => {
    // links to show up when logged in
    if (user) {
      return (
        <>
          <li onClick={ () => handleLogout() }>
            Logout
          </li>
          <Link to='/toxics'>
            <li>
              Toxic
            </li>
          </Link>
          <Link to='/notes'>
            <li>
              Note
            </li>
          </Link>
          <Link to='/messages'>
            <li>
              Message
            </li>
          </Link>
        </>
      )
    } else {
      // links to show up when Not logged in
      return (
        <>
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
        <ul>
          <Link to='/'>
            <li>
              Home
            </li>
          </Link>
            { rightNavItems() }
        </ul>
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
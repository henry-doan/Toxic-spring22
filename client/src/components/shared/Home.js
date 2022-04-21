
import { Link } from 'react-router-dom';

const Home = () => (
  <>
  <h3>Devise Auth App</h3>
           
  <Link to='/register'>
      <button>
        Sign Up
      </button>
    </Link>
    <Link to='/login'>
      <button>
        Login
      </button>
    </Link>
  </>
)

export default Home;
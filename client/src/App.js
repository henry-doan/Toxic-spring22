import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Footer from './components/shared/Footer';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import FetchUser from './components/auth/FetchUser';
import Toxics from './components/toxics/Toxics'
import Notes from './components/notes/Notes'
// import ToxicForm from './components/toxics/ToxicForm'
import Messages from './components/messages/Messages'
import Profile from './components/auth/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path="/" element={<ProtectedRoute />} >
          <Route path='/toxics' element={ <Toxics /> } />
          <Route path='/notes' element={ <Notes /> } />
          <Route path='/messages' element={ <Messages /> } />
          <Route path='/profile' element={ <Profile /> } />
          {/* <Route path='/toxics/:toxicId/edit' element={ <ToxicForm /> } /> */}
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </>
    </FetchUser>
    <Footer />
  </>
)

export default App;

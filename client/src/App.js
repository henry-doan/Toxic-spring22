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
import LNavbar from './components/shared/LeftNavbar'
import Teams from './components/teams/Team';

const App = () => (
  <>
  <div style={{display: 'flex', backgroundColor: 'black', minHeight: '100vh'}}>
    <LNavbar /> {/* left Nav Bar imported */}
    <FetchUser>
      <>
        <Routes>
          <Route path="/" element={<ProtectedRoute />} >
          <Route path='/toxics' element={ <Toxics /> } />
          <Route path='/notes' element={ <Notes /> } />
          <Route path='/messages' element={ <Messages /> } />
          <Route path='/profile' element={ <Profile /> } />
          <Route path='/teams' element={<Teams /> } />
          {/* <Route path='/toxics/:toxicId/edit' element={ <ToxicForm /> } /> */}
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </>
    </FetchUser>
    <MainNavbar/> {/* right Nav Bar imported */}

    </div>
    {/* <Footer /> */}
  </>
)

export default App;

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
// import ToxicForm from './components/toxics/ToxicForm'

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path="/" element={<ProtectedRoute />} >
          <Route path="/" element={<Home />} />
          <Route path='/toxics' element={ <Toxics /> } />
          {/* <Route path='/toxics/:toxicId/edit' element={ <ToxicForm /> } /> */}
          </Route>
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

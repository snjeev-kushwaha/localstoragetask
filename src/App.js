import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import CompanyInfo from './pages/CompanyInfo';
import Movielist from './pages/Movielist';
import Navbars from './components/Navbar';
import Mainfile from './layout/Mainfile';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      {location.pathname === '/' ? (<Login />) : (
        <Routes>
          <Route path='/home' element={<Mainfile Component={Navbars} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/movie' element={<Mainfile Component={Movielist} />} />
          <Route path='/company_info' element={<Mainfile Component={CompanyInfo} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

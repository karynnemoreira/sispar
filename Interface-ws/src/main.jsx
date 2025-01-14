
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import Login from './Components/Login/Login.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/nav' element={<Navbar/>}/>
    </Routes>
  </BrowserRouter>,
)

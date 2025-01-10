
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import Login from './Components/Login/Login.jsx';
import Reembolso from './Components/Home/Reembolso.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Reembolso/>}/>
    </Routes>
  </BrowserRouter>,
)

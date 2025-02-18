
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import Login from './Components/Login/Login.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Reembolsos from './Components/TelaReembolso/Reembolsos.jsx';
import SolicitarReembolso from './Components/solicitar-reembolso/SolicitarReembolso.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/nav' element={<Navbar/>}/>
      <Route path='/reembolso' element={<Reembolsos />}/>
      <Route path='/solicitar-reembolso' element={<SolicitarReembolso/>}/>
    </Routes>
  </BrowserRouter>,
)

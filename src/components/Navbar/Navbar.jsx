import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Reembolsos from "../Reembolsos/Reembolsos";
import Login from "../Login/Login"

import person from "./img-navbar/image-person.png";
import hamburguer from "./img-navbar/hamburguer.png";
import home from "./img-navbar/home.png";
import estorno from "./img-navbar/estorno.png";
import boletos from "./img-navbar/boletos.png";
import clientes from "./img-navbar/clientes.png";
import sair from "./img-navbar/sair.png";

import "./style.css";

export default function Navbar() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <button id="btn-menu">
          <img src={hamburguer} alt="" />
        </button>
        <img
          src={person}
          alt="Imagem padrão caso o colaborador não tenha foto"
        />
        <section>
          <Link to="reembolsos">
          
            <button>
              <img src={home} alt="" />
            </button>
          </Link>

          <button id="btn-estorno">
            <img src={estorno} alt="" />
          </button>

          <button>
            <img src={boletos} alt="" />
          </button>
          <button>
            <img src={clientes} alt="" />
          </button>
        </section>

<Link to="login">
        <button id="btn-logoff">
          <img src={sair} alt="" />
        </button>
 </Link>


      </nav>

      <Routes>
        <Route path="/reembolsos" element={<Reembolsos />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>



    </BrowserRouter>
  );
}

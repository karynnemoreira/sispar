import React, { useState } from 'react'
import person from '../../assets/image-person.png'
import hamburguer from '../../assets/vetores/hamburguer.png'
import home from '../../assets/vetores/home.png'
import estorno from '../../assets/vetores/estorno.png'
import boletos from '../../assets/vetores/boletos.png'
import clientes from '../../assets/vetores/clientes.png'
import sair from '../../assets/vetores/sair.png'
import './style.css'
import { useNavigate } from 'react-router'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate()

  const handleLogoff = () => {
    navigate('/login')
  } 

  return (
      <nav>
        <button id='btn-menu' onClick={toggleMenu}><img src={hamburguer} alt="" /></button>

        <img src={person} alt="Imagem padrão caso o colaborador não tenha foto" />

        <section className={menuOpen ? 'menu-open' : 'menu-closed'}>
          <button><img src={home} alt="" /></button>
          <button id='btn-estorno'><img src={estorno} alt="" /></button>
          <button><img src={boletos} alt="" /></button>
          <button><img src={clientes} alt="" /></button>
        </section>

        <button id='btn-logoff' onClick={handleLogoff}><img src={sair} alt="" /></button>
      </nav>
  )
}

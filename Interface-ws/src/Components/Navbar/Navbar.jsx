import React from 'react'
import person from '../../assets/image-person.png'
import hamburguer from '../../assets/vetores/hamburguer.png'
import home from '../../assets/vetores/home.png'
import estorno from '../../assets/vetores/estorno.png'
import boletos from '../../assets/vetores/boletos.png'
import clientes from '../../assets/vetores/clientes.png'
import sair from '../../assets/vetores/sair.png'



import './style.css'

export default function Navbar() {
  return (
      <nav>
        <button id='btn-menu'><img src={hamburguer} alt="" /></button>

        <img src={person} alt="Imagem padrão caso o colaborador não tenha foto" />

        <section>
          <button><img src={home} alt="" /></button>
          <button id='btn-estorno'><img src={estorno} alt="" /></button>
          <button><img src={boletos} alt="" /></button>
          <button><img src={clientes} alt="" /></button>
        </section>

        <button id='btn-logoff'><img src={sair} alt="" /></button>
      </nav>
  )
}

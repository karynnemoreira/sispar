import React from 'react';
import '../Login/style.css';
import logoWS from '../../assets/logo-ws.png';
import api from '../../Services/Api'
import { data } from 'react-router';

export default function Login() {

  // api.post('/login', data: {
    
  // })
  return (
      <section className='container-login'>
        {/* background */}
        <section className='image-login'>
        </section>

        <section className='forms-login'>
          <article>
            <div>
            <img src={logoWS} alt="Logo Wilson Sons em tons de azul" />
            <h1>Boas vindas ao Novo Portal SISPAR</h1>
            <p>Sistema de Emissão de Boletos e Parcelamento</p>
            </div>
            <form action="">
              <label htmlFor="">Email</label>
              <input type="email" name="" id="" placeholder='Email' />
              <label htmlFor="">Senha</label>
              <input type="password" name="" id="" placeholder='******' />
              <a href="">Esqueci minha senha</a>
              <div>
                <button id='btn-signin'>Entrar</button>
                <button id='btn-signup'>Criar conta</button>
              </div>
            </form>
          </article>
        </section>
      </section>
  )
}

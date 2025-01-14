import React from 'react';
import "../Login/style.css";
import Reembolsos from "../Reembolsos/Reembolsos.jsx"

import logoWS from "./img-login/image-login.png";


export default function Login() {
  return (
      <section className='container-login'>
        {/* background */}
        <section className='image-login'>
        </section>

        <section className='forms-login'>
          <article>
            <div>
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
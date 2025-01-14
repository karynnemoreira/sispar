import React from "react";

import "../Reembolsos/style.css";

import Home from "./img-reembolsos/home.png";
import Seta from "./img-reembolsos/seta.png";

import SolicitarReembolso from "./img-reembolsos/SolicitarReembolso.png";
import VerTodos from "./img-reembolsos/todos.png";
import Historico from "./img-reembolsos/historico.png";

import Solicitados from "./img-reembolsos/solicitados.png"
import Analise from "./img-reembolsos/analise.png"
import Aprovados from "./img-reembolsos/aprovados.png"
import Rejeitados from "./img-reembolsos/rejeitados.png"

import Nuvem from "./img-reembolsos/nuvem.png"

export default function Reembolsos() {
  return (
    <section className="ContainerGeralReembolsos">
      <header>
        <nav>
          <img src={Home} alt="Vetor Home" />
          <img src={Seta} alt="Vetor Seta Avançar" />
          <p>Reembolsos</p>
        </nav>

        <section>
          <h1>Reembolsos</h1>
          <p>
            Solicite novos pedidos de reembolso, visualize as solicitações
            atuais e todo o histórico.
          </p>
        </section>
      </header>

      <main>
        <section className="containerSolicitacoes">
          <div className="boxOneReembolso">
            <img src={SolicitarReembolso} alt="Vetor Solicitar Reembolso" />
            <h5>Solicitar Reembolso</h5>
          </div>

          <div className="boxTwoVerTodos">
            <img src={VerTodos} alt="Vetor Ver Todos" />
            <h5>Ver todos</h5>
          </div>

          <div
            className="boxthreeHistorico"
          >
            <img src={Historico} alt="Vetor Histórico" />
            <h5>Histórico</h5>
          </div>
        </section>

<section className="containerVetores">
  <div className="boxSolicitados">
    <div>
         <img src={Solicitados} alt="" />
    </div>
    <p className="quantidade"> 182</p>
    <p className="andamento"> Solicitados</p>
  </div>

  
  <div className="boxAnalise">
    <div>
          <img src={Analise} alt="" />

    </div>
    <p className="quantidade"> 74</p>
    <p className="andamento"> Em análise</p>
  </div>

  <div className="boxAprovados">
    <div>
          <img src={Aprovados} alt="" />

    </div>
    <p className="quantidade"> 195</p>
    <p className="andamento"> Aprovados</p>
  </div>


  <div className="boxRejeitados">
    <div>
          <img src={Rejeitados} alt="" />
    </div>
    <p className="quantidade"> 41</p>
    <p className="andamento">Rejeitados</p>
  </div>

</section>

<section className="containerNuvem">
  <img src={Nuvem} alt="Vetor Nuvem" />
  <p>Sistema atualizado em tempo real.</p>
</section>

      </main>
    </section>
  );
}

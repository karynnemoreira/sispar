import React, { useState } from 'react'
import './style.css'
import Navbar from '../Navbar/Navbar'

export default function Reembolso() {

  const [dadosReembolso, setDadosReembolso] = useState({
    colaborador: '',
    empresa: '',
    nPrestacao: '',
    descricao: '',
    data: '',
    motivo: '',
    tipoReembolso: '',
    centroCusto: '',
    ordemInterna: '',
    divisao: '',
    pep: '',
    moeda: '',
    distanciaKm: '',
    valorKm: '',
    valorFaturado: '',
    despesa: ''
  })

  const [dados, setDados] = useState([])

  const handleChange = (e) => {
    setDadosReembolso({ ...dadosReembolso, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDados([...dados, dadosReembolso])
    console.log(dadosReembolso)
    setDadosReembolso({
      colaborador: '',
      empresa: '',
      nPrestacao: '',
      descricao: '',
      data: '',
      motivo: '',
      tipoReembolso: '',
      centroCusto: '',
      ordemInterna: '',
      divisao: '',
      pep: '',
      moeda: '',
      distanciaKm: '',
      valorKm: '',
      valorFaturado: '',
      despesa: ''
    })
  }

  

  return (
    <section className='tela-reembolso'>
      <Navbar />

      <section className='conteudo-tela-reembolso'>
        <p> <img src="" alt="" />  reembolsos  solicitar reembolso</p>
        <form onSubmit={handleSubmit} className='container-inputs'>
          <section className="box-information">
            <div id='first-row'>
              <div>
                <label htmlFor="">Nome completo</label>
                <input
                  value={dadosReembolso.colaborador}
                  name='colaborador'
                  onChange={handleChange}
                  type="text" id='nome-completo' />
              </div>
              <div>
                <label htmlFor="">Empresa</label>
                <input name='empresa'
                value={dadosReembolso.empresa}
                  onChange={handleChange} type="text" />
              </div>
              <div>
                <label htmlFor="">N° Prest. Contas</label>
                <input value={dadosReembolso.nPrestacao}
                  onChange={handleChange} type="number" name="nPrestacao" id="" />
              </div>
            </div>


            <div id='second-row'>
              <label htmlFor="">Descrição</label>
              <textarea value={dadosReembolso.descricao}
              name='descricao'
                onChange={handleChange} htmlFor="" id='text-description'></textarea>
            </div>

          </section>
          <section className='box-information2'>

            <div id='first-row'>
              <div>
                <label htmlFor="">Data</label>
                <input value={dadosReembolso.data}
                  onChange={handleChange} type="date" name="data" id="" />
              </div>


              <div>
                <label htmlFor="">Tipo</label>
                <select value={dadosReembolso.tipoReembolso}
                name="tipoReembolso" 
                  onChange={handleChange} id="">
                  <option value="">Selecionar</option>


                  <option value="Alimentação">Alimentação</option>
                  <option value="Combustível">Combustível</option>
                  <option value="Condução">Condução</option>
                  <option value="Estacionamento">Estacionamento</option>
                  <option value="Viagem admin">Viagem admin</option>
                  <option value="Viagem operacional">Viagem operacional</option>
                  <option value="Eventos de representação">Eventos de representação</option>
                </select>
              </div>


              <div>
                <label htmlFor="">Centro de custo</label>
                <select value={dadosReembolso.centroCusto}
                  onChange={handleChange} name="centroCusto" id="cost-center-input">
                  <option value="">Selecionar</option>


                  <option value="FIN CONTROLES INTERNOS MTZ">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                  <option value="FIN VICE-PRESIDENCIA FINANCAS MTZ">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                  <option value="FIN CONTABILIDADE MTZ">1100110101 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>

            </div>

            <section className="second-row">
              <section className='inputs-info-sr'>
                <div>
                  <label htmlFor="">Ord. Int</label>
                  <input value={dadosReembolso.ordemInterna}
                  name='ordemInterna'
                    onChange={handleChange} id='order-input' type="text" />
                </div>

                <div>
                  <label htmlFor=""> PEP</label>
                  <input value={dadosReembolso.pep}
                    onChange={handleChange} 
                    name='pep'
                    id='PEP' type="text" />
                </div>

                <div>
                  <label htmlFor="">Dist./KM</label>
                  <input value={dadosReembolso.distanciaKm}
                  name='distanciaKm'
                    onChange={handleChange} id='distance-input' type="text" />
                </div>

                <div>
                  <label htmlFor="">Moeda</label>
                  <select value={dadosReembolso.moeda}
                    onChange={handleChange} name="moeda" id="cents">
                    <option value="">Moeda</option>
                    <option value="BRL">BRL</option>
                    <option value="DOL">Dol</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="">Valor / KM</label>
                  <input value={dadosReembolso.valorKm}
                    onChange={handleChange}
                    name='valorKm'
                    id='value-km' type="text" />
                </div>

                <div>
                  <label htmlFor="">Val. Taxa</label>
                  <input
                    id='value-tax' type="text" />
                </div>

                <div>
                  <label htmlFor="">Val. Faturado</label>
                  <input value={dadosReembolso.valorFaturado}
                  name='valorFaturado'
                    onChange={handleChange} id='value-fat' type="text" />
                </div>

              </section>

              <div id='container-buttons'>
                <button type='submit' id='button-save'> + Salvar</button>
                <button id='button-out'>Sair</button>
              </div>
            </section>

          </section>

        </form>
        <section className="screen-info">
          <table className='table-informations'>

            <thead>

              <tr className='header-table'>

                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo Reemb.</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item, index) => (
                <tr key={index}>
                  <td></td>
                  <td>{item.colaborador}</td>
                  <td>{item.empresa}</td>
                  <td>{item.nPrestacao}</td>
                  <td>{item.data}</td>
                  <td></td>
                  <td>{item.tipoReembolso}</td>
                  <td>{item.centroCusto}</td>
                  <td>{item.ordemInterna}</td>
                  <td>{item.divisao}</td>
                  <td>{item.pep}</td>
                  <td>{item.moeda}</td>
                  <td>{item.distanciaKm}</td>
                  <td>{item.valorKm}</td>
                  <td>{item.valorFaturado}</td>
                  <td>{item.despesa}</td>
                </tr>
                
              ))}
            </tbody>
          </table>
        </section>
              <div classname='container-btn-ask-refund'>
                <button>Enviar</button>
                <button>Cancelar Solicitação</button>
              </div>

      </section>



    </section>
  )
}

import React from 'react'
import './style.css'
import Navbar from '../Navbar/Navbar'
export default function Reembolso() {
  return (
    <section className='tela-reembolso'>
        <Navbar/>
        
        <section className='container-inputs'>
            <label htmlFor="">Data</label>
            <input type="date" name="" id="" />

            <label htmlFor="">Valor</label>
            <input type="number" name="" id="" />

            <label htmlFor="">Dist.KM</label>
            <input type="number" name="" id="" />

            <label htmlFor="">Dist.mil</label>
            <input type="number" name="" id="" />

            <label htmlFor="">Observação</label>
            <input type="text" name="" id="" />

        </section>

    </section>
  )
}

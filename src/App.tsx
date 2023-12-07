import './App.css'
import React from 'react'
import imagem from './assets/BIMACHINE-LOGO.png'
import img from './assets/Americanas_Logo.png'
import calci from './assets/calci.png'
import unimed from './assets/unimed.png'
import imec from './assets/logoimec.png'

import certel from './assets/certel.png'


function App() {
const formLead = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('enviou!', 
  e.target.name.value,
  e?.target.email.value, e.target.segmento.value, e.target.fone.value)
}
  return (
    <>
      <div>
        <div className='backgroundcolor'/>
        <img src={imagem} className='logo'/>
        < div className='container'>
          <div className='card'>
            <div className='cardletf'>
            <ul>
              <li>Desbrave a plataforma, faça o Teste grátis!</li>
              <li>Melhor plataforma de BI! </li>
              <li>Dashboards interativos e relatórios precisos!</li>
              <li>Venha alcançar o real SUCESSO!</li>
            </ul>

            <div className='testeButton'>
                <button type='submit'>
                 Teste grátis!
                </button>
                </div>
            
            </div>

              <div className='cardright'>
              <p>Preencha seus dados:</p>
              <form onSubmit={formLead}>
               <div className='input-form'>
                <p className='label-field'>Name: </p>
                <input 
                type="text" 
                id="name"
                name="name"/>
                </div>
                
                <div className='input-form'>
                <p className='label-field'>Telefone: </p>
                <input
                 type="tel" 
                id="fone"
                name="fone"/>
                </div>
                
                <div className='input-form'>
                  <p className='label-field'>Email: </p>
                <input
                 type="email" 
                id="email"
                name="email"/>
                </div>

                <div className='input-form'>
                  <p className='label-field'>Segmento: </p>
                <input
                type="text" 
                id="segmento"
                name="segmento"/>
                </div>

                <div className='submitButton'>
                <button type='submit'>
                Enviar!
                </button>
                </div>


              </form>
            </div>
          </div>
          <div className='provaSocial'>
            São mais de 4500 empresas de sucesso comprovado, confiando na nossa parceria!
            <img src={img} className='parceiros'/>
            <img src={calci} className='parceiros'/>
            <img src={imec} className='parceiros'/>
            <img src={unimed} className='parceiros'/>
            <img src={certel} className='parceiros'/>
          </div>
        </div>
      </div>
      </>
  )
}

export default App

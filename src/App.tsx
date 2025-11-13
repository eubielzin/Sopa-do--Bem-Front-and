import { Prestacao } from "./component/prestacao"
import { useState } from 'react'
import Teste from './component/teste.tsx'
import Introducao from './component/introducao.tsx'



import Footer from './component/footer.tsx'


import Donate from './component/donate.tsx'
import Calendario from './component/calendario.tsx'
import Fundadores from './component/fundadores.tsx'
import './App.css'
import Galeria from "./component/galeria.tsx"
import "./App.css"


import './App.css'
import Entrega from './component/pontosEntrega.tsx'

function App() {

  return (
    <>
      <div>
        <Prestacao/>
       
        {/* <Teste/> */}
        <Introducao/>
        {/* <Teste/> */}
        <Footer/>
        <Donate/>
        <Calendario/>
        {/* <Teste/> */}
        <Fundadores/>
        {/* <Teste/> */}
        <Galeria/>
        <Entrega />
      </div>
    </>
  )
}

export default App

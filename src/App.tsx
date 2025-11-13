import { useState } from 'react'
import Teste from './component/teste.tsx'
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

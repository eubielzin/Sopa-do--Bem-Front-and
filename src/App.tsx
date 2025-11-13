import { useState } from 'react'
import Teste from './component/teste.tsx'
import Galeria from "./component/galeria.tsx"
import "./App.css"


import './App.css'
import Entrega from './component/pontosEntrega.tsx'

function App() {

  return (
    <>
      <div>
        {/* <Teste/> */}
        <Galeria/>
        <Entrega />
      </div>
    </>
  )
}

export default App

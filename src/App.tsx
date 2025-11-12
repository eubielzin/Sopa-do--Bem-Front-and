import { useState } from 'react'
import Teste from './component/teste.tsx'
import Galeria from "./component/galeria.tsx"
import "./App.css"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Teste/> */}
        <Galeria/>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import Teste from './component/teste.tsx'
import Fundadores from './component/fundadores.tsx'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Teste/> */}
        <Fundadores/>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import Teste from './component/teste.tsx'
import Introducao from './component/introducao.tsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Teste/> */}
        <Introducao/>
      </div>
    </>
  )
}

export default App

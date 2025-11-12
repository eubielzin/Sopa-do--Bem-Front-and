import { useState } from 'react'
import Teste from './component/teste.tsx'
import Calendario from './component/calendario.tsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Calendario/>
      </div>
    </>
  )
}

export default App

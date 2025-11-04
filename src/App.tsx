import { useState } from 'react'
import Teste from './component/teste.tsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Teste/>
      </div>
    </>
  )
}

export default App

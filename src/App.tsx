import { useState } from 'react'
import Teste from './component/teste.tsx'
import Donate from './component/donate.tsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Donate/>
      </div>
    </>
  )
}

export default App

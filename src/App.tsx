import { useState } from 'react'
import Teste from './component/teste.tsx'
import Footer from './component/footer.tsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Teste/> */}
        <Footer/>
      </div>
    </>
  )
}

export default App

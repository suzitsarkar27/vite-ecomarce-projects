import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h2 className=' text-center caret-lime-500'> Hello come of wevs</h2>
        <Home></Home>
    </div>
  )
}

export default App

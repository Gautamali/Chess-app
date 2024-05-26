import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Landing } from './screens/landing'
import { Game } from './screens/game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen bg-slate-950'>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landing /> } ></Route>
      <Route path='/game' element={<Game /> } ></Route>
      </Routes>
    </BrowserRouter>    
     </div>
     </>
  )
}

export default App

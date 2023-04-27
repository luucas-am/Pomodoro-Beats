import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Pomodoro from './pages/Pomodoro/Pomodoro'

function App() {
  return (
    <BrowserRouter>
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pomodoro' element={<Pomodoro />} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
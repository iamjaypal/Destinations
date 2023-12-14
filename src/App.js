import React from 'react'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Destinations from './Components/Destinations'
import './App.css'
function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/destination/:id' element={<Destinations/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
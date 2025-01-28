import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'

function App() {

  // get user object from firebase here
  // pass user to Home as prop

  let user = null
  

  return (
    
      <BrowserRouter>
      
          <Routes>
              <Route path='/' element={<Home user={user} />} />
          </Routes>
      
      
      </BrowserRouter>


  )
}

export default App

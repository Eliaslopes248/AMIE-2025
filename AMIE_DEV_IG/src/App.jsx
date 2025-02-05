import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { Specialist } from './pages/specialist'
import Chatbot from './pages/chatbot'

function App() {

  // get user object from firebase here
  // pass user to Home as prop

  let userName = 'Dorothy';
  

  return (
    
      <BrowserRouter>
      
          <Routes>
              <Route path='/' element={<Home user={userName} />} />
              <Route path='/specialist' element={<Specialist />} />
              <Route path='/chatbot' element={<Chatbot />} />
          </Routes>
      
      
      </BrowserRouter>


  )
}

export default App


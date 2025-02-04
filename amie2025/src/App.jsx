import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { Appointments } from './pages/appointments'
import { Support } from './pages/support'

function App() {

  // get user object from firebase here
  // pass user to Home as prop

  let user = null
  

  return (
    
      <BrowserRouter>
      
          <Routes>
              <Route path='/' element={<Home user={user} />} />
              <Route path='/appointments' element={<Appointments user={user} />} />
              <Route path='/support' element={<Support user={user} />} />
              
          </Routes>
      
      
      </BrowserRouter>


  )
}

export default App

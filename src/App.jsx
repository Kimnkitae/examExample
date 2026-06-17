import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Layout/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './Layout/Footer.jsx'
function App() {
  

  return (
    <BrowserRouter>
    <Header />
    <Routes>

      <Route path='/' element={<Home />} />
      

    </Routes>
    </BrowserRouter>
  )
}

export default App

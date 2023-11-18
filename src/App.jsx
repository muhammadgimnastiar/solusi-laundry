import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

// import styling dari tailwind
import '../src/assets/css/tailwind.css'

//import komponen

import Home from './pages/Home/Home'
import Pesanan from './pages/Pesanan/Pesanan'
import Paket from './pages/Paket/Paket'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'



export default function App() {
  return (
    <BrowserRouter>
    {/* Komponen navbar */}
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pesanan" element={<Pesanan/>} />
        <Route path="/paket" element={<Paket/>} />

        
      </Routes>
    {/* Komponen Footer */}
    <Footer/>
    </BrowserRouter>
  )
}
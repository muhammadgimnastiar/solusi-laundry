import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

// import styling dari tailwind
import '../src/assets/css/tailwind.css'

//import komponen
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'



export default function Example() {
  return (
    <BrowserRouter>
    {/* Komponen navbar */}
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    {/* Komponen Footer */}
    <Footer/>
    </BrowserRouter>
  )
}
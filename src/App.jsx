// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Carousal from './Components/Carousal'
import About from './Components/About'
import DonersCarousel from './Components/DonersCarousel'

function App() {

  return (
    <>
      <Navbar/>
      <Carousal/>
      <About/>
      <DonersCarousel/>
    </>
  )
}

export default App

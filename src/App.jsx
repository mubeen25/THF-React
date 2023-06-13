// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Carousal from './Components/Carousal'
import About from './Components/About'
import DonersCarousel from './Components/DonersCarousel'
import Skills from './Components/Skills'
import StudentFeedback from './Components/StudentFeedback'

function App() {

  return (
    <>
      <Navbar/>
      <Carousal/>
      <Skills/>
      <About/>
      <DonersCarousel/>
      <StudentFeedback/>
    </>
  )
}

export default App

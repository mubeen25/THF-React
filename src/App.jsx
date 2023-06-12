// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Carousal from './Components/Carousal'
import About from './Components/About'
import Skills from './Components/Skills'
import Headlines from './Components/Headlines'

function App() {

  return (
    <>
      <Navbar/>
      <Carousal/>
      <Skills/>
      <Headlines/>
      <About/>
    </>
  )
}

export default App

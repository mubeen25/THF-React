// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Carousal from './Components/Carousal'
import About from './Components/About'
import DonersCarousel from './Components/DonersCarousel'
import Skills from './Components/Skills'
import StudentFeedback from './Components/StudentFeedback'
import Headlines from './Components/Headlines'
import Institutes from './Components/Institutes'
import UpcomingInstitutions from './Components/UpcomingInstitutions'
import Campus from './Components/Campus'
import Priorities from './Components/Priorities'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Carousal/>
      <Skills/>
      <Headlines/>
      <About/>
      <Institutes/>
      <UpcomingInstitutions/>
      <Priorities/>
      <Campus />
      <StudentFeedback/>
      <DonersCarousel/>
      <Footer/>
    </>
  )
}

export default App

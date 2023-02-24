import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Clients from './Clients'
import Work from './Work'
import Carousel from './Carousel'
import AboutMe from './AboutMe'
import Footer from './Footer'
// import Clock from './Clock'
import HeaderVideo from './HeaderVideo'
import ArrowUp from './ArrowUp'
import OtherProjects from './OtherProjects'

function Main({props}) {
  
  return (
    <main className="page">
      <ArrowUp scroll={props.scrollHome} show={props.arrowUpShow} />
      <HeaderVideo />
      <Home props={props} />
      <Routes>
        <Route path="other-projects" element={
          <OtherProjects />
        } />

        <Route path="/" element={
          <>
            <Clients />
            <Work props={props}/>
            <h2 className='carousel-title'>Other projects</h2>
            <Carousel />
            <AboutMe props={props}/>
            {/* <Clock /> */}
            <Footer props={props}/>
          </>
        } />
      </Routes>
    </main>
  )
}

export default Main
import React from 'react'

import Home from './Home'
import Clients from './Clients'
import Work from './Work'
import Carousel from './Carousel'
import AboutMe from './AboutMe'
import Footer from './Footer'
// import Clock from './Clock'
import HeaderVideo from './HeaderVideo'
import ArrowUp from './ArrowUp'

function Main({props}) {

  return (
    <main className="page">
      <ArrowUp scroll={props.scrollHome} show={props.arrowUpShow} />
      <HeaderVideo />
      <Home 
        scrollWorks={props.scrollWorks} 
        scrollShowreels={props.scrollShowreels}
        scrollContacts={props.scrollContacts}
        menuClick={props.handleMenuIcon} 
        shown={props.shown}
        homeRef={props.homeRef}
      />
      <Clients />
      <Work props={props}/>
      <h2 className='carousel-title'>Other projects</h2>
      <Carousel />
      <AboutMe props={props}/>
      {/* <Clock /> */}
      <Footer props={props}/>
    </main>
  )
}

export default Main
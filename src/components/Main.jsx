import React from 'react'

import Home from './Home'
import Clients from './Clients'
import Work from './Work'
import Carousel from './Carousel'
import AboutMe from './AboutMe'
import Footer from './Footer'

function Main({props}) {

  return (
    <main className="page">
      <Home scroll={props.scroll}/>
      <Clients />
      <Work props={props}/>
      <Carousel />
      <AboutMe props={props}/>
      <Footer />
    </main>
  )
}

export default Main
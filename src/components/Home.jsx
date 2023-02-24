import React from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import menuIcon from '../images/menu.png'
import arrowLeft from '../images/arrow_left.png'

function Home({props}) {
  const {scrollWorks, scrollShowreels, scrollContacts, menuClick, homeRef, shown, toOtherProjects} = props
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="home" ref={homeRef}>
      <nav>
          <div 
            className='home__home-icon'
            onClick={() => navigate('/')}
          ></div>
          <div 
            className='home__menu-icon'
            onClick={menuClick}
            style={{
              transform: shown ? 'rotate(-360deg)' : 'rotate(0)',
              transition: 'all 0.4s ease-in-out',
              backgroundImage: shown ? `url(${arrowLeft})` : `url(${menuIcon})`,
              backgroundSize: 'cover',
            }}
          ></div>
          <ul className='home__menu'
            style={{
              visibility: shown ? 'visible' : 'hidden', 
              opacity: shown ? 1 : 0, 
              transform: shown ? 'translateX(0)' : 'translateX(500px)',
              transition: 'all 0.5s ease-in-out'
            }}
          >
            <li 
              className='home__menu-item' 
              onClick={scrollWorks}
            >Latest works</li>
            <li 
              className='home__menu-item' 
              onClick={scrollShowreels}
            >Showreels</li>
            <li 
              className='home__menu-item' 
              onClick={scrollContacts}  
            >Contacts</li>
            <li className='home__menu-item' onClick={toOtherProjects}>Other projects</li>
          </ul>
      </nav>
      <h1 className="home__title">Compositing and matchmove artist specialising in <span className="bold-text">VFX</span></h1>
      <button 
        style={{
          visibility: location.pathname === '/' ? "visible" : 'hidden'
        }}
        type="button" 
        className="home__button"
        onClick={scrollWorks}
      ></button>
    </div>
  );
}

export default Home;
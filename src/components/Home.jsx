import React from 'react';
import menuIcon from '../images/menu.png'
import arrowLeft from '../images/arrow_left.png'

function Home({scrollWorks, scrollShowreels, scrollContacts, menuClick, shown, homeRef}) {

  const showed = shown

  return (
    <div className="home" ref={homeRef}>
      <nav>
          <div 
            className='home__menu-icon'
            onClick={menuClick}
            style={{
              transform: showed ? 'rotate(-360deg)' : 'rotate(0)',
              transition: 'all 0.4s ease-in-out',
              backgroundImage: showed ? `url(${arrowLeft})` : `url(${menuIcon})`,
              backgroundSize: 'coover',
            }}
          ></div>
          <ul className='home__menu'
            style={{
              visibility: showed ? 'visible' : 'hidden', 
              opacity: showed ? 1 : 0, 
              transform: showed ? 'translateX(0)' : 'translateX(500px)',
              // gap: showed ? 250 : 0,
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
          </ul>
      </nav>
      <h1 className="home__title">Compositing and matchmove artist specialising in <span className="bold-text">VFX</span></h1>
      <button 
        type="button" 
        className="home__button"
        onClick={scrollWorks}
      ></button>
    </div>
  );
}

export default Home;
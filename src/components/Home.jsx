import React from 'react';
import bgVideo from '../videos/Site_Header.mp4';
import ReactPlayer from 'react-player';

function Home({scroll}) {
  return (
    <div className="home">
      <video 
        className = 'home__video'
        autoPlay
        muted 
        loop 
      >
        <source src={bgVideo} type='video/mp4' />
      </video>
      <h1 className="home__title">Compositing and matchmove artist specialising in <span className="bold-text">VFX</span></h1>
      <button 
        type="button" 
        className="home__button"
        onClick={scroll}
      ></button>
    </div>
  );
}

export default Home;
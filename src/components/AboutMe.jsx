import React from 'react'
import image1 from '../images/about-me__image_1.png'
import image2 from '../images/about-me__image_2.png'
import image3 from '../images/about-me__image_3.png'

import WorkStack from './WorkStack'

function AboutMe({props}) {
  const {handlePopupTrailer, setLink} = props
  function handleClick(e) {
    setLink(e.target.getAttribute('link'))
    handlePopupTrailer()
  }
  return (
    <>
      <div className="about-me">
        <div className="about-me__content">
          <div className="about-me__text-content">
            <h2 className="about-me__title">A bit about me</h2>
            <p className="about-me__text">I am a compositing/matchmove artist who is passionate about creating <span
              className="bold-text">beautiful and
              joyful images and visual effects.</span></p>
          </div>
          <div className="about-me__images">
            <img className="about-me__image about-me__image_area_1" src={image1} alt='tracker' />
            <img className="about-me__image about-me__image_area_2" src={image2} alt='tracker' />
            <img className="about-me__image about-me__image_area_3" src={image3} alt='tracker' />
          </div>
        </div>
      <WorkStack />
      </div>


      <div className="showreels" ref={props.showreelsRef}>
        <div className="showreels__button" link="https://youtu.be/ZaesolB9YxY" onClick={handleClick}>VIEW COMPOSITING SHOWREEL<div
          className="work__article-button-icon"></div></div>
        <div className="showreels__button" link="https://youtu.be/ysI8GA44cFc" onClick={handleClick} >VIEW MATCHMOVE SHOWREEL<div
          className="work__article-button-icon"></div></div>
      </div>
    </>
  );
}

export default AboutMe;
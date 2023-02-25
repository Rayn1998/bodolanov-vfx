import React from 'react';
import bgVideo from '../videos/Site_Header.mp4';

const HeaderVideo = () => {
    return (
        <div className='header-video'>
            <video 
                className = 'header-video__src'
                autoPlay
                muted 
                loop 
            >
                <source src={bgVideo} type='video/mp4' />
            </video>
        </div>
    )
}

export default HeaderVideo
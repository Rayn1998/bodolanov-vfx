import React from 'react'

import OtherProject from './OtherProject'

import ship from '../images/other_projects/ship/1.jpeg'
import tank from '../images/other_projects/tank/1.jpg'
import saxonPistol from '../images/other_projects/saxon_pistol/1.jpg'
import frenchFlintlock from '../images/other_projects/french_flintlock/1.jpg'
import ak47 from '../images/other_projects/AK47/1.jpg'

import motion1 from '../videos/motion_1.mov'

const OtherProjects = () => {

    const images = [
        ship, tank, saxonPistol, frenchFlintlock, ak47
    ]

    const texts = [
        'Ship', 'Tank', 'Saxon Pistol', 'French Flintlock', 'AK-47'
    ]

    return (
        <div className='other-projects'>
            {images.map((image, i) => {
                return (
                    <OtherProject 
                        image={image}
                        texts={texts}
                        i={i}
                    />
                )
            })}
        </div>
    )
}

export default OtherProjects
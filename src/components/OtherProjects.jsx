import React from 'react'

import OtherProject from './OtherProject'

import ship from '../images/other_projects/ship/1.jpeg'
import tank from '../images/other_projects/tank/1.jpg'
import saxonPistol from '../images/other_projects/saxonpistol/1.jpg'
import frenchFlintlock from '../images/other_projects/frenchflintlock/1.jpg'
import ak47 from '../images/other_projects/ak47/1.jpg'
import hand from '../images/other_projects/hand/1.jpeg'
import waterdrop from '../images/other_projects/waterdrop/1.jpeg'

const OtherProjects = ({link}) => {
    
    const images = [
        ship, tank, saxonPistol, frenchFlintlock, ak47, hand, waterdrop
    ]

    const texts = [
        'Ship', 'Tank', 'Saxon Pistol', 'French Flintlock', 'AK-47', "Hand", "Waterdrop"
    ]

    return (
        <>
            <h2 className='other-projects__title'>Other Projects</h2>
            <div className='other-projects'>
                {images.map((image, i) => {
                    return (
                        <OtherProject 
                            image={image}
                            texts={texts}
                            path={texts[i]}
                            i={i}
                            // link={link}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default OtherProjects
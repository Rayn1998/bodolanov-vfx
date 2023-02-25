import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OtherProjectView from './OtherProjectView';

const OtherProject = ({image, texts, i, path, link}) => {

    const newPath = path.replace(' ', '')

    const navigation = useNavigate()

    const [mouseOn, setMouseOn] = useState(false)

    function handleMouseOn() {
        setMouseOn(true)
    }

    function handleMouseOff() {
        setMouseOn(false)
    }

    return (
        <div 
            className="other-projects__img" 
            style={{
                backgroundImage: `url(${image})`,
            }} 
            key={image}
            onMouseOver={() => {
                handleMouseOn()
            }}
            onMouseOut={() => {
                handleMouseOff()}
            }
            // onClick={() => {
            //     console.log('click')
            //     navigation(newPath)
            //     // <OtherProjectView images={shipImages} />
            // }}
        >
            <div 
                className='other-projects__img-wrapper'
                style={{
                    transform: mouseOn ? "translateY(0)" : "translateY(200px)"
                }}
            >{texts[i]}</div>
        </div>
    )
}

export default OtherProject
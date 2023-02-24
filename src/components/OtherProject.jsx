import React, { useState } from 'react'

const OtherProject = ({image, texts, i}) => {

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
import React from 'react'

import eq from '../images/soft-icons/3DE4.png'
import maya from '../images/soft-icons/maya.png'
import houdini from '../images/soft-icons/houdini.png'
import nuke from '../images/soft-icons/Nuke.png'

const WorkStack = () => {

    const icons = [eq, maya, houdini, nuke]

    return (
        <div className='workstack'>
            <h2 className='workstack__title'>Working stack</h2>
            <div className='workstack__icons'>
                {icons.map((icon) => {
                    return <div className='workstack__icon' key={icon} style={{backgroundImage: `url(${icon})`}}></div>
                })}
            </div>
        </div>
    )
}

export default WorkStack
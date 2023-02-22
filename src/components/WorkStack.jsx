import React from 'react'

import eq from '../images/soft-icons/3DE4.png'
import maya from '../images/soft-icons/maya.png'
import houdini from '../images/soft-icons/houdini.png'
import nuke from '../images/soft-icons/Nuke.png'

const WorkStack = () => {
    return (
        <div className='workstack'>
            <h2 className='workstack__title'>Working stack</h2>
            <div className='workstack__icons'>
                <img src={eq} alt='3de'/>
                <img src={maya} alt='houdini'/>
                <img src={houdini} alt='maya'/>
                <img src={nuke} alt='nuke'/>
            </div>
        </div>
    )
}

export default WorkStack
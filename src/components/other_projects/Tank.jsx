import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Tank = ({images}) => {
    return (
        <Route path="/Tank" >
            <div className="project-wrapper">
                {images.map((image, i) => {
                    <LazyLoadImage src={image} key={i} alt={image} />
                })}
            </div>
        </Route>
    )
}

export default Tank
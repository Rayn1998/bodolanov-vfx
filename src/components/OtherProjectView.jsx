import React from 'react'
import { Route, useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const OtherProjectView = () => {

    function importAll(r) {
        return r.keys().map(r);
    }

    const shipImages = importAll(require.context('../images/other_projects/ship/', false, /\.(png|jpe?g|svg)$/))
    const tankImages = importAll(require.context('../images/other_projects/tank/', false, /\.(png|jpe?g|svg)$/))
    const saxon_pistolImages = importAll(require.context('../images/other_projects/saxon_pistol/', false, /\.(png|jpe?g|svg)$/))
    const french_flintlockImages = importAll(require.context('../images/other_projects/french_flintlock/', false, /\.(png|jpe?g|svg)$/))
    const ak47Images = importAll(require.context('../images/other_projects/ak47/', false, /\.(png|jpe?g|svg)$/))
    const handImages = importAll(require.context('../images/other_projects/hand/', false, /\.(png|jpe?g|svg)$/))
    const waterdropImages = importAll(require.context('../images/other_projects/waterdrop/', false, /\.(png|jpe?g|svg)$/))


    return (
        <div className='other-project-view'>
            {shipImages.map((image, i) => {
                return <LazyLoadImage src={image} key={i} alt={image} />
            })}
        </div>
    )
}

export default OtherProjectView
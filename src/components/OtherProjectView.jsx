import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const OtherProjectView = () => {

    const { id } = useParams()
    const name = id.toLowerCase() + 'Images'

    const navigate = useNavigate()
    const location = useLocation()

    function importAll(r) {
        return r.keys().map(r);
    }


    const Images = {
        shipImages: importAll(require.context(
            "../images/other_projects/ship/",
            false,
            /\.(png|jpe?g|svg)$/
            )
        ),

        tankImages: importAll(
            require.context(
            "../images/other_projects/tank/",
            false,
            /\.(png|jpe?g|svg)$/
            )
        ),

        saxonpistolImages: importAll(
            require.context(
            "../images/other_projects/saxon_pistol/",
            false,
            /\.(png|jpe?g|svg)$/
            )
        ),

        frenchflintlockImages: importAll(
            require.context(
            "../images/other_projects/french_flintlock/",
            false,
            /\.(png|jpe?g|svg)$/
            )
        ),

        ak47Images: importAll(
            require.context(
            "../images/other_projects/ak47/",
            false,
            /\.(png|jpe?g|svg)$/
            )
        ),

        handImages: importAll(
            require.context(
            "../images/other_projects/hand/",
            false,
            /\.(png|jpe?g|svg)$/
            )
        ),

        waterdropImages: importAll(
            require.context(
            "../images/other_projects/waterdrop/",
            false,
            /\.(png|jpe?g|svg)$/
            )
        ),
    }

    return (
        <>
            <div 
                className="other-project-view__back"
                onClick={() => navigate('/other-projects')}
                style={{visibility: location.pathname.replace('/other-projects/', '') ?? 'visible'}}
            ></div>
            <div className="other-project-view">
                <h2 className="other-project-view-title">{id}</h2>
                {Images[name].map((image, i) => {
                    return (
                        <div className="other-project-view__img-wrapper">
                            <LazyLoadImage
                                className="other-project-view__img"
                                src={image}
                                key={image}
                                alt={image}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default OtherProjectView;

import React from "react";

const Navigation = ({props}) => {

    const {scrollWorks, scrollShowreels, scrollContacts, toOtherProjects} = props

    return (
        <nav className="navigation" ref={props.homeRef}>
            <div className="home__home-icon" ></div>
            <div
                className="home__menu-icon"
                style={{
                transition: "all 0.4s ease-in-out",
                }}
            ></div>
            <ul
                className="home__menu"
                style={{
                visibility: 'visible',
                opacity: 1,
                transform: 'translateX(0)',
                transition: "all 0.5s ease-in-out",
                }}
            >
                <li className="home__menu-item" onClick={scrollWorks}>
                Latest works
                </li>
                <li className="home__menu-item" onClick={scrollShowreels}>
                Showreels
                </li>
                <li className="home__menu-item" onClick={scrollContacts}>
                Contacts
                </li>
                <li className="home__menu-item" onClick={toOtherProjects}>
                Other projects
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

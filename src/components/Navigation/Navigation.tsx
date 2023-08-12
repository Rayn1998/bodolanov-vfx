import { FC } from "react";

const Navigation: FC = () => {

    // const {scrollWorks, scrollShowreels, scrollContacts, toOtherProjects} = props

    return (
        //ref={props.homeRef} 
        <nav className="navigation"> 
            <div className="navigation__home-icon" ></div>
            <div
                className="navigation__menu-icon"
                style={{
                transition: "all 0.4s ease-in-out",
                }}
            ></div>
            <ul
                className="navigation__menu"
                style={{
                visibility: 'visible',
                opacity: 1,
                transform: 'translateX(0)',
                transition: "all 0.5s ease-in-out",
                }}
            >
                <li className="navigation__menu-item" 
                //onClick={scrollWorks}
                >
                Latest works
                </li>
                <li className="navigation__menu-item" 
                //onClick={scrollShowreels}
                >
                Showreels
                </li>
                <li className="navigation__menu-item" 
                //onClick={scrollContacts}
                >
                Contacts
                </li>
                <li className="navigation__menu-item" 
                //onClick={toOtherProjects}
                >
                Other projects
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

import React from 'react';
import kinopoisk from '../images/clients__kinopoisk_logo.png'
import russia1 from '../images/clients__russia1_logo.png'
import okko from '../images/clients__okko_logo.png'
import ivi from '../images/clients__ivi_logo.png'

function Clients(props) {
  return (
    <div className="clients">
      <div className="clients__content">
        <h2 className="clients__title">Some of<span className="bold-text"> the clients I have <br />worked for</span></h2>
        <div className="clients__logos-wrapper">
          <img className="clients__logo" src={kinopoisk} alt='Кинопоиск' />
            <img className="clients__logo" src={russia1} alt='Россия 1' />
          <img className="clients__logo" src={okko} alt='okko' />
          <img className="clients__logo" src={ivi} alt='ivi' />
        </div>
      </div>
    </div>
  );
}

export default Clients;
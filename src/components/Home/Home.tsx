import { FC } from 'react';

import { useLocation } from 'react-router-dom';


const Home: FC = () => {

  // const {scrollWorks} = props

  const location = useLocation();

  return (
    <div className="home">
      <h1 className="home__title">Compositing and matchmove artist specialising in <span className="bold-text">VFX</span></h1>
      <button 
        style={{
          visibility: location.pathname === '/' ? "visible" : 'hidden'
        }}
        type="button" 
        className="home__button"
        // onClick={scrollWorks}
      ></button>
    </div>
  );
}

export default Home;
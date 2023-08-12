import { FC } from "react";
import Article from "../Article/Article";

import parma from "../images/posters/parma.jpeg";
import konets_sveta from "../images/posters/konets_sveta.jpeg";
import sobor from "../images/posters/sobor.jpeg";
import upon_the_magic_roads from "../images/posters/konek.jpeg";
import mira from "../images/posters/mira.jpeg";

import bgParma from "../images/posters/backs/parma.jpg";
import bgMira from "../images/posters/backs/mira.jpg";
import bgKonek from "../images/posters/backs/konek.jpg";
import bgKonets from "../images/posters/backs/konets_sveta.jpg";
import bgSobor from "../images/posters/backs/sobor.jpg";

import { miraText, parmaText, konets_svetaText, soborText, konekText } from "../../utils/texts"

const Work: FC = () => {
  return (
    <div className="work" ref={props.workRef}>
      <div className="work__content">
        <h2 className="work__title" id="works">Participated in these projects</h2>
        <div className="work__articles">
          
          <Article
            poster={mira}
            title="MIRA"
            typeOfWork="Compose, matchmove"
            trailerLink="https://www.youtube.com/watch?v=PzFh5C7QxiA"
            open={props}
            orderImg={1}
            imdbLink="https://www.imdb.com/title/tt15296186/?ref_=nm_knf_i_3"
            bgImage={bgMira}
            mainText={miraText}
          >
            
          </Article>
          <Article
            poster={parma}
            title="Serdtse parmy"
            typeOfWork="Compose, matchmove"
            trailerLink="https://youtu.be/Vjq5i-yq96U"
            open={props}
            orderImg={2}
            imdbLink="https://www.imdb.com/title/tt10749948/?ref_=nm_flmg_t_2_vsl"
            bgImage={bgParma}
            mainText={parmaText}
          >
          </Article>

          <Article
            poster={konets_sveta}
            title="Konets Sveta"
            typeOfWork="Compose, matchmove"
            trailerLink="https://youtu.be/ctAoDjpeE2A"
            open={props}
            orderImg={1}
            imdbLink="https://www.imdb.com/title/tt15530436/?ref_=nv_sr_srsg_0"
            bgImage={bgKonets}
            mainText={konets_svetaText}
          >
          </Article>

          <Article
            poster={sobor}
            title="Sobor"
            typeOfWork="Compose, matchmove"
            trailerLink="https://www.youtube.com/watch?v=zmunjiXo_MA"
            open={props}
            orderImg={2}
            imdbLink="https://www.imdb.com/title/tt12026382/?ref_=nm_flmg_i_3_vsl"
            bgImage={bgSobor}
            mainText={soborText}
          >
          </Article>

          <Article
            poster={upon_the_magic_roads}
            title="Upon the magic roads"
            typeOfWork="Compose, mathcmove"
            trailerLink="https://youtu.be/vFlfBfIADOg"
            open={props}
            orderImg={1}
            imdbLink="https://www.imdb.com/title/tt11390180/?ref_=nm_flmg_i_9_vsl"
            bgImage={bgKonek}
            mainText={konekText}
          >
          </Article>

        </div>
      </div>
    </div>
  );
}

export default Work;
import React from "react";
import Article from "./Article";

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

function Work({ props }) {
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
          >
            <span className="bold-text">Nowadays.</span> A father
            working on a space station has to save his 15-year-old daughter
            after a meteorite shower hits Earth, using only satellite phones and
            cameras.
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
          >
            <span className="bold-text">The 15th century.</span> Sent to remote
            Parma by the Grand Prince of Moscow, prince Yermolay tells his son
            Mikhail about his dream: to create a grand princedom that would
            unite the peoples inhabiting these lands.
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
          >
            <span className="bold-text">
              {" "}
              Our days. A brutal bloody murder is taking place in the center of
              Moscow
            </span>
            , which cannot be explained in rational ways, the only true version
            is that Satan himself came to Earth. He came to arrange the
            Apocalypse. Satan goes to find his son - Antichrist, without whom
            the Apocalypse cannot begin.
          </Article>

          <Article
            poster={sobor}
            title="Sobor"
            typeOfWork="Compose, matchmove"
            trailerLink="https://youtu.be/r2RWBTLTfWA"
            open={props}
            orderImg={2}
            imdbLink="https://www.imdb.com/title/tt12026382/?ref_=nm_flmg_i_3_vsl"
            bgImage={bgSobor}
          >
            <span className="bold-text">
              Different strokes for different folks - says the proverb.
            </span>{" "}
            Born a rabble dies a rabble. But this is the year 1700, the time of
            dramatic changes in the Russian Empire, the time of reformations
            carried out by Peter the Great.
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
          >
            <span className="bold-text">
              {" "}
              Foal and his friend John go on an unforgettable journey
            </span>{" "}
            as they outsmart the tyrant King, catch the fire-bird and find
            John's true love upon the magic roads.
          </Article>
        </div>
      </div>
    </div>
  );
}

export default Work;

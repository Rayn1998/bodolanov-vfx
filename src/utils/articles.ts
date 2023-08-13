import IArticle from 'types/IArticle';

import miraBg from 'assets/images/posters/backs/mira.jpg';
import parmaBg from 'assets/images/posters/backs/parma.jpg';
import konetsBg from 'assets/images/posters/backs/konets_sveta.jpg';
import soborBg from 'assets/images/posters/backs/sobor.jpg';
import konekBg from 'assets/images/posters/backs/konek.jpg';

import miraPoster from 'assets/images/posters/mira.jpeg';
import parmaPoster from 'assets/images/posters/parma.jpeg';
import konekPoster from 'assets/images/posters/konek.jpeg';
import soborPoster from 'assets/images/posters/sobor.jpeg';
import konetsPoster from 'assets/images/posters/konets_sveta.jpeg';

import {
	miraText,
	parmaText,
	konets_svetaText,
	soborText,
	konekText,
} from 'utils/texts';


const articles: IArticle[] = [
  {
    title: 'MIRA',
    typeOfWork: 'Compose, matchmove',
    trailerLink:'https://www.youtube.com/watch?v=PzFh5C7QxiA',
    orderImg: 1,
    imdbLink: 'https://www.imdb.com/title/tt15296186/?ref_=nm_knf_i_3',
    bgImage: miraBg,
    mainText: miraText,
    poster: miraPoster,
  },

  {
    title: 'Serdtse parmy',
    typeOfWork: 'Compose, matchmove',
    trailerLink: 'https://youtu.be/Vjq5i-yq96U',
    orderImg: 2,
    imdbLink: 'https://www.imdb.com/title/tt10749948/?ref_=nm_flmg_t_2_vsl',
    bgImage: parmaBg,
    mainText: parmaText,
    poster: parmaPoster,
  },

  {
    title: 'Konets Sveta',
    typeOfWork: 'Compose, matchmove',
    trailerLink: 'https://youtu.be/ctAoDjpeE2A',
    orderImg: 1,
    imdbLink: 'https://www.imdb.com/title/tt15530436/?ref_=nv_sr_srsg_0',
    bgImage: konetsBg,
    mainText: konets_svetaText,
    poster: konetsPoster,
  },

  {
    title: 'Sobor',
    typeOfWork: 'Compose, matchmove',
    trailerLink: 'https://www.youtube.com/watch?v=zmunjiXo_MA',
    orderImg: 2,
    imdbLink: 'https://www.imdb.com/title/tt12026382/?ref_=nm_flmg_i_3_vsl',
    bgImage: soborBg,
    mainText: soborText,
    poster: soborPoster,
  },

  {
    title: 'Upon the magic roads',
    typeOfWork: 'Compose, matchmove',
    trailerLink: 'https://youtu.be/vFlfBfIADOg',
    orderImg: 1,
    imdbLink: 'https://www.imdb.com/title/tt11390180/?ref_=nm_flmg_i_9_vsl',
    bgImage: konekBg,
    mainText: konekText,
    poster: konekPoster,
  },
]

export default articles;
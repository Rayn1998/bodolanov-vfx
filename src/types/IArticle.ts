import { ReactNode } from 'react';

export default interface IArticle {
  title: string;
  typeOfWork: string;
  trailerLink: string;
  orderImg: number;
  imdbLink: string;
  bgImage: string;
  mainText: string[];
  children?: ReactNode;
  poster: string;
}
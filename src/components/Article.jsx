import React from 'react';

function Article({poster, title, typeOfWork, trailerLink, children, open, orderImg, imdbLink}) {
  const {setLink, setCurrentTitle, handlePopupTrailer} = open
  const order = orderImg
  const imdb = imdbLink

  function handleClick() {
    setLink(trailerLink)
    setCurrentTitle(title)
    handlePopupTrailer()
  }

  return (
    <article className='work__article'>
        <a className={`work__image-wrapper ${order === 1 ? '' : 'work__image-wrapper_order_2'}`} href={imdb} target="_blank">
          <img
            className='work__article-image'
            src={poster}
          />
        </a>
      <div className="work__article-wrapper">
        <div className="work__article-text-content">
          <div className="work__article-text-wrapper">
            <h2 className="work__article-title">{title}</h2>
            <p className="work__article-text">
              {children}
            </p>
          </div>
          <p className="work__article-categorie">{typeOfWork}</p>
        </div>
        <form>
          <button
            className="work__article-button"
            type="button"
            onClick={handleClick}
          >
            VIEW TRAILER
            <div className="work__article-button-icon"></div>
          </button>
        </form>
      </div>
    </article>
  );
}

export default Article;
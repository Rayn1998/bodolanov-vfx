import React from 'react'
import ReactPlayer from 'react-player'

function PopupTrailer({ title, isOpen, onClose, link }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__body">
        <div className="popup__content">
          <button
            type="button"
            className="popup__close-btn"
            aria-label="Кнопка закрытия попапа"
            onClick={onClose}
          />
          <h2 className="popup__title">{title}</h2>
          <div className='popup__player-wrapper'>
            <ReactPlayer 
              className='popup__player'
              url={link}
              width='100%'
              height='100%'
              controls={true}
              playing={isOpen ? true : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupTrailer;
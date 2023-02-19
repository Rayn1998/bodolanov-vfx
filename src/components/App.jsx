import { useEffect, useState, useRef } from 'react'
import Main from './Main'
import '../pages/index.css'
import PopupTrailer from './PopupTrailer';

// about__me_text сделать адаптивным
// footer socials

function App() {
  const [isPopupOpened, setrIsPopupOpened] = useState(false)
  const [currentLink, setCurrentLink] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')

  const workRef = useRef()

  function setLink(link) {
    setCurrentLink(link)
  }

  function handlePopupTrailer() {
    setrIsPopupOpened(!isPopupOpened)
  }

  function closePopups() {
    setrIsPopupOpened(false)
    workRef.current.focus() 
  }

  function scroll() {
    workRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    function handleEscClose(e) {
      if (e.key === 'Escape') {
        closePopups()
      }
    }

    function handleOutOfBox(e) {
      if (e.target.classList.contains('popup__body')) {
        closePopups()
      }
    }

    if (isPopupOpened) {
      document.addEventListener('keydown', handleEscClose)
      document.addEventListener('mousedown', handleOutOfBox)
      return () => {
        document.removeEventListener('keydown', handleEscClose)
        document.addEventListener('mousedown', handleOutOfBox)
      }
    }
  }, [isPopupOpened])

  return (
    <>
      <Main
        props={{
          handlePopupTrailer,
          setLink,
          workRef,
          scroll,
          setCurrentTitle
        }}
      />
      <PopupTrailer
        title={currentTitle}
        isOpen={isPopupOpened}
        onClose={closePopups}
        link={currentLink}
      />
    </>
  );
}

export default App;

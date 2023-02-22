import { useEffect, useState, useRef } from 'react'
import Main from './Main'
import '../pages/index.css'
import PopupTrailer from './PopupTrailer';

function App() {
  const [isPopupOpened, setrIsPopupOpened] = useState(false)
  const [currentLink, setCurrentLink] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')
  const [shown, setShown] = useState(false);
  const [arrowUpShow, setArrowUpShow] = useState(false)

  const [prevSrollPos, setPrevScrollPos] = useState(0);

  const homeRef = useRef()
  const workRef = useRef()
  const showreelsRef = useRef()
  const contactsRef = useRef()

  function handleArrowUp() {
    const currentScrollPos = window.pageYOffset
    setArrowUpShow((prevSrollPos > currentScrollPos && prevSrollPos - currentScrollPos > 1000) || currentScrollPos > 300)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleArrowUp)
    return () => window.removeEventListener('scroll', handleArrowUp)
  }, [handleArrowUp, arrowUpShow, prevSrollPos])

  function handleMenuIcon(e) {
    setShown(!shown)
  }

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

  function scrollHome() {
    homeRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  function scrollWorks() {
    workRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  function scrollShowreels() {
    showreelsRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  function scrollContacts() {
    contactsRef.current.scrollIntoView({
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
          homeRef,
          workRef,
          showreelsRef,
          contactsRef,
          scrollHome,
          scrollWorks,
          scrollContacts,
          scrollShowreels,
          setCurrentTitle,
          handleMenuIcon,
          shown,
          arrowUpShow
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
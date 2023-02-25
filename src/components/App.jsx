// Переписать и упростить компонент Article

import { useEffect, useState, useRef } from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'

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

  const navigation = useNavigate()
  const location = useLocation()

  function handleArrowUp() {
    const currentScrollPos = window.pageYOffset
    setArrowUpShow((prevSrollPos > currentScrollPos && prevSrollPos - currentScrollPos > 1000) || currentScrollPos > 300)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleArrowUp)
    return () => window.removeEventListener('scroll', handleArrowUp)
  }, [handleArrowUp, arrowUpShow, prevSrollPos])

  function menuClick(e) {
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

  function linkHome() {
    navigation('/')
  }

  function checkHome() {
    return location.pathname === '/'
  }

  function scrollWorks() {
    if (checkHome()) {
        workRef.current.scrollIntoView({
          behavior: 'smooth',
        })
        setShown(false)
    } else {
      linkHome()
    }
  }

  function scrollShowreels() {
    if (checkHome()) {
      showreelsRef.current.scrollIntoView({
        behavior: 'smooth',
      })
      setShown(false)
    } else {
      linkHome()
    }
  }

  function scrollContacts() {
    if (checkHome()) {
      contactsRef.current.scrollIntoView({
        behavior: 'smooth',
      })
      setShown(false)
    } else {
      linkHome()
    }
  }

  function toOtherProjects() {
    navigation('/other-projects')
    setShown(false)
  }

  function toCurtainProject(path) {
    navigation(path)
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
          linkHome,
          menuClick,
          shown,
          arrowUpShow,
          toOtherProjects,
          toCurtainProject,
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
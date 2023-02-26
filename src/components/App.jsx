// Переписать и упростить компонент Article

import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

import Main from './Main';
import '../pages/index.css';
import Popup from './Popup';
import ContactForm from './ContactForm';
import Player from './Player';

function App() {
	const [isPopupOpened, setrIsPopupOpened] = useState(false);
	const [isFormOpened, setFormOpened] = useState(false);
	const [currentLink, setCurrentLink] = useState('');
	const [currentTitle, setCurrentTitle] = useState('');
	const [shown, setShown] = useState(false);
	const [arrowUpShow, setArrowUpShow] = useState(false);

	const [prevSrollPos, setPrevScrollPos] = useState(0);

	const homeRef = useRef();
	const workRef = useRef();
	const showreelsRef = useRef();
	const contactsRef = useRef();

	const navigation = useNavigate();
	const location = useLocation();

	function handleArrowUp() {
		const currentScrollPos = window.pageYOffset;
		setArrowUpShow(
			(prevSrollPos > currentScrollPos &&
				prevSrollPos - currentScrollPos > 1000) ||
				currentScrollPos > 300
		);
		setPrevScrollPos(currentScrollPos);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleArrowUp);
		return () => window.removeEventListener('scroll', handleArrowUp);
	}, [handleArrowUp, arrowUpShow, prevSrollPos]);

	function menuClick(e) {
		setShown(!shown);
	}

	function setLink(link) {
		setCurrentLink(link);
	}

	function handlePopupTrailer() {
		setrIsPopupOpened(!isPopupOpened);
    setArrowUpShow(false);
	}

	function closePopups() {
		setrIsPopupOpened(false);
    setFormOpened(false);
    setArrowUpShow(true);
		workRef.current.focus();
	}

	function handleContactForm() {
		setFormOpened(!isFormOpened);
    setArrowUpShow(!arrowUpShow);
	}

	function scrollHome() {
		homeRef.current.scrollIntoView({
			behavior: 'smooth',
		});
	}

	function linkHome() {
		navigation('/');
	}

	function checkHome() {
		return location.pathname === '/';
	}

	function scrollWorks() {
		if (checkHome()) {
			workRef.current.scrollIntoView({
				behavior: 'smooth',
			});
			setShown(false);
		} else {
			linkHome();
		}
	}

	function scrollShowreels() {
		if (checkHome()) {
			showreelsRef.current.scrollIntoView({
				behavior: 'smooth',
			});
			setShown(false);
		} else {
			linkHome();
		}
	}

	function scrollContacts() {
		if (checkHome()) {
			contactsRef.current.scrollIntoView({
				behavior: 'smooth',
			});
			setShown(false);
		} else {
			linkHome();
		}
	}

	function toOtherProjects() {
		navigation('/other-projects');
		setShown(false);
	}

	function toCurtainProject(path) {
		navigation(path);
	}

	useEffect(() => {
		function handleEscClose(e) {
			if (e.key === 'Escape') {
				closePopups();
			}
		}

		function handleOutOfBox(e) {
			if (e.target.classList.contains('popup__body')) {
				closePopups();
			}
		}

		if (isPopupOpened || isFormOpened) {
			document.addEventListener('keydown', handleEscClose);
			document.addEventListener('mousedown', handleOutOfBox);
			return () => {
				document.removeEventListener('keydown', handleEscClose);
				document.addEventListener('mousedown', handleOutOfBox);
			};
		}
	}, [isPopupOpened, isFormOpened]);

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
          handleContactForm,
				}}
			/>

			<Popup
				title={currentTitle}
				isOpen={isPopupOpened}
				onClose={closePopups}
			> 
        <Player 
          link={currentLink}
          isOpen={isPopupOpened}
        />
      </Popup>

      <Popup
        title={currentTitle}
				isOpen={isFormOpened}
				onClose={closePopups}
        title='CONTACT WITH ME'
      >
			<ContactForm 
        onClose={closePopups}
      /> 
      </Popup>
		</>
	);
}

export default App;

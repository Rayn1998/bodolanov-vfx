import { useEffect, useState, FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Main from 'components/Main/Main';
// import Popup from '../Popup';
// import ContactForm from '../ContactForm';
// import Player from '../Player';

const App: FC = () => {
	const [isFormOpened, setFormOpened] = useState<boolean>(false);
	const [currentLink, setCurrentLink] = useState<string>('');
	const [currentTitle, setCurrentTitle] = useState<string>('');
	const [shown, setShown] = useState<boolean>(false);
	// const [arrowUpShow, setArrowUpShow] = useState<boolean>(false);

	const [prevSrollPos, setPrevScrollPos] = useState<number>(0);

	const navigation = useNavigate();
	const location = useLocation();

	const handleArrowUp = () => {
		const currentScrollPos = window.pageYOffset;
		// setArrowUpShow(
		// 	(prevSrollPos > currentScrollPos &&
		// 		prevSrollPos - currentScrollPos > 1000) ||
		// 		currentScrollPos > 300
		// );
		setPrevScrollPos(currentScrollPos);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleArrowUp);
		return () => window.removeEventListener('scroll', handleArrowUp);
	}, [handleArrowUp, prevSrollPos]);

	function menuClick(e) {
		setShown(!shown);
	}

	function setLink(link) {
		setCurrentLink(link);
	}

	function closePopups() {
		setFormOpened(false);
		// setArrowUpShow(true);
		// workRef.current.focus();
	}

	function handleContactForm() {
		setFormOpened(!isFormOpened);
		// setArrowUpShow(!arrowUpShow);
	}

	// function scrollHome() {
	// 	homeRef.current.scrollIntoView({
	// 		behavior: 'smooth',
	// 	});
	// }

	function linkHome() {
		navigation('/');
	}

	function checkHome() {
		return location.pathname === '/';
	}

	function scroll(ref) {
		ref.current.scrollIntoView({
			behavior: 'smooth',
		});
	}

	function scrollWorks() {
		if (checkHome()) {
			// scroll(workRef);
			setShown(false);
		} else {
			linkHome();
			setTimeout(() => {
				// scroll(workRef);
				setShown(false);
			}, 1000);
		}
	}

	function scrollShowreels() {
		if (checkHome()) {
			// scroll(showreelsRef);
			setShown(false);
		} else {
			linkHome();
			setTimeout(() => {
				// scroll(showreelsRef);
				setShown(false);
			}, 1000);
		}
	}

	function scrollContacts() {
		if (checkHome()) {
			// scroll(contactsRef);
			setShown(false);
		} else {
			linkHome();
			setTimeout(() => {
				// scroll(contactsRef);
				setShown(false);
			}, 1000);
		}
	}

	function toOtherProjects() {
		navigation('/other-projects');
		setShown(false);
	}

	function toCurtainProject(path) {
		navigation(path);
	}

	// useEffect(() => {
	// 	function handleEscClose(e) {
	// 		if (e.key === 'Escape') {
	// 			closePopups();
	// 		}
	// 	}

	// 	function handleOutOfBox(e) {
	// 		if (e.target.classList.contains('popup__body')) {
	// 			closePopups();
	// 		}
	// 	}

	// 	if (isPopupOpened || isFormOpened) {
	// 		document.addEventListener('keydown', handleEscClose);
	// 		document.addEventListener('mousedown', handleOutOfBox);
	// 		return () => {
	// 			document.removeEventListener('keydown', handleEscClose);
	// 			document.addEventListener('mousedown', handleOutOfBox);
	// 		};
	// 	}
	// }, [isPopupOpened, isFormOpened]);

	return (
		// <>
			<Main />
				// props={{
				// 	setLink,
				// 	homeRef,
					// workRef,
				// 	showreelsRef,
				// 	contactsRef,
				// 	scrollHome,
				// 	scrollWorks,
				// 	scrollContacts,
				// 	scrollShowreels,
				// 	setCurrentTitle,
				// 	linkHome,
				// 	menuClick,
				// 	shown,
				// 	arrowUpShow,
				// 	toOtherProjects,
				// 	toCurtainProject,
				// 	handleContactForm,
			// 	}}
			// />

			// {/* <Popup
			// 	title={currentTitle}
			// 	isOpen={isPopupOpened}
			// 	onClose={closePopups}
			// >
			// 	<Player link={currentLink} isOpen={isPopupOpened} />
			// </Popup>

			// <Popup
			// 	isOpen={isFormOpened}
			// 	onClose={closePopups}
			// 	title="CONTACT WITH ME"
			// >
			// 	<ContactForm onClose={closePopups} />
			// </Popup> */}
		// </>
	);
};

export default App;

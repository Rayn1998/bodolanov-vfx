import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
	props: any;
}

const Navigation: FC<IProps> = ({ props }) => {
	console.log(props.workRef)
	const navigate = useNavigate();

	return (
		<nav className='navigation'>
			<div 
        className='navigation__home-icon'
        onClick={() => navigate('/')}
      ></div>
			<div
				className='navigation__menu-icon'
				style={{
					transition: 'all 0.4s ease-in-out',
				}}
			></div>
			<ul
				className='navigation__menu'
				style={{
					visibility: 'visible',
					opacity: 1,
					transform: 'translateX(0)',
					transition: 'all 0.5s ease-in-out',
				}}
			>
				<li
					className='navigation__menu-item'
					onClick={() => props.workRef.current.scrollIntoView()}
				>
					Latest works
				</li>
				<li
					className='navigation__menu-item'
					//onClick={scrollShowreels}
				>
					Showreels
				</li>
				<li
					className='navigation__menu-item'
					//onClick={scrollContacts}
				>
					Contacts
				</li>
				<li
					className='navigation__menu-item'
					onClick={() => navigate('/other-projects')}
				>
					Other projects
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;

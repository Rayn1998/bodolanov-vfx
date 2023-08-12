import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import kinopoisk from 'assets/images/clients__kinopoisk_logo.png';
import russia1 from 'assets/images/clients__russia1_logo.png';
import okko from 'assets/images/clients__okko_logo.png';
import ivi from 'assets/images/clients__ivi_logo.png';

const Clients: FC = () => {
	return (
		<div className='clients'>
			<div className='clients__content'>
				<h2 className='clients__title'>
					Some of
					<span className='bold-text'>
						{' '}
						the clients I have <br />
						worked for
					</span>
				</h2>
				<div className='clients__logos-wrapper'>
					<LazyLoadImage
						className='clients__logo'
						effect='opacity'
						src={kinopoisk}
						alt='Кинопоиск'
					/>
					<LazyLoadImage
						className='clients__logo'
						effect='opacity'
						src={russia1}
						alt='Россия 1'
					/>
					<LazyLoadImage
						className='clients__logo'
						effect='opacity'
						src={okko}
						alt='okko'
					/>
					<LazyLoadImage
						className='clients__logo'
						effect='opacity'
						src={ivi}
						alt='ivi'
					/>
				</div>
			</div>
		</div>
	);
};

export default Clients;

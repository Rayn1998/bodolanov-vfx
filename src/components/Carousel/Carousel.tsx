import { FC } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import { Autoplay, FreeMode, Scrollbar, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import posters from 'utils/posters';

const Carousel: FC = () => {
	return (
		<>
			<div
				style={{
					margin: '100px 50px',
				}}
			>
				<Swiper
					modules={[Autoplay, FreeMode, Scrollbar, EffectCoverflow]}
					effect='coverflow'
					coverflowEffect={{
						rotate: 20,
						stretch: 0,
						depth: 200,
					}}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					scrollbar={{
						draggable: true,
					}}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						1400: {
							slidesPerView: 4,
						},
						800: {
							slidesPerView: 3,
						},
						500: {
							spaceBetween: 0,
							slidesPerView: 2,
							coverflowEffect: {
								stretch: 200,
								depth: 200,
							},
						},
						400: {
							spaceBetween: 0,
							slidesPerView: 2,
						},
					}}
				>
					{posters.map((poster, i) => {
						return (
							<SwiperSlide key={i}>
								<LazyLoadImage
									src={poster}
									effect='opacity'
									className='carousel-element'
									alt={poster}
									loading='lazy'
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</>
	);
};

export default Carousel;

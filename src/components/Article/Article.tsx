import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import IArticle from 'types/IArticle';

interface IProps {
	props: IArticle;
}

const Article: FC<IProps> = ({ props }) => {
	return (
		<article className='article'>
			<div className='article__background-wrapper'>
				<div
					className='article__background'
					style={{ backgroundImage: `url(${props.bgImage})` }}
				></div>
			</div>
			<a
				className={`article__image-wrapper ${
					props.orderImg === 1 ? '' : 'article__image-wrapper_order_2'
				}`}
				href={props.imdbLink}
				target='_blank'
				rel='noreferrer'
			>
				<LazyLoadImage
					effect='opacity'
					className='article__image'
					src={props.poster}
				/>
			</a>
			<div className='article__wrapper'>
				<div className='article__text-content'>
					<div className='article__text-wrapper'>
						<h2 className='article__title'>{props.title}</h2>
						<p className='article__text'>
							<span className='bold-text'>{props.mainText[0]}</span> {props.mainText[1]}
						</p>
					</div>
					<p className='article__categorie'>{props.typeOfWork}</p>
				</div>
				<form>
					<button
						className='article__button'
						type='button'
						// onClick={handleClick}
					>
						VIEW TRAILER
						<div className='article__button-icon'></div>
					</button>
				</form>
			</div>
		</article>
	);
};

export default Article;

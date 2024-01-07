import React from 'react';
import ReactPlayer from 'react-player';
import {
	useParams,
	useNavigate,
	useLocation,
	Navigate,
} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import images from '../utils/images';

const OtherProjectView = () => {
	const { id } = useParams();

	const folders = Object.keys(images);

	const name = id.toLowerCase() + 'Images';

	// Check if there is such files and if not show page not found
	const exists = folders.find((el) => {
		return el === name;
	});

	const navigate = useNavigate();
	const location = useLocation();

	if (!exists) {
		return <Navigate to="/page-not-found" />;
	}

	return (
		<>
			<div
				className="other-project-view__back"
				onClick={() => navigate('/other-projects')}
				style={{
					visibility:
						location.pathname.replace('/other-projects/', '') ??
						'visible',
				}}
			></div>
			<div className="other-project-view">
				<h2 className="other-project-view-title">{id}</h2>
				{images[exists].map((image, i) => {
					let movEx = image.includes('mp4');
					return (
						<>
							<div className="other-project-view__img-wrapper">
								{movEx ? (
									<video
										controls
										className="other-project-view__vid"
										key={image}
										loop
									>
										<source
											src={image}
											type='video/mp4'
										>
										</source>
									</video>
								) : (
									<LazyLoadImage
										className="other-project-view__img"
										src={image}
										key={image}
										alt={image}
									/>
								)}
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default OtherProjectView;

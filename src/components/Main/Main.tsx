import React, { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Loading from 'components/Loading/Loading';

import HeaderVideo from 'components/HeaderVideo/HeaderVideo';
import Navigation from 'components/Navigation/Navigation';
import ArrowUp from 'components/ArrowUp/ArrowUp';
import Home from 'components/Home/Home';
import Clients from 'components/Clients/Clients';
import Work from 'components/Work/Work';
import Carousel from 'components/Carousel/Carousel';
import AboutMe from 'components/AboutMe/AboutMe';
// import Footer from '../Footer/Footer';
// import OtherProjects from '../OtherProjects/OtherProjects';
// import OtherProjectView from '../OtherProjectView';
// import PageNotFound from '../PageNotFound/PageNotFound';
// import Thank from '../Thank';

// const LazyWork = React.lazy(() => import('../Work/Work'));
// const LazyCarousel = React.lazy(() => import('../Carousel/Carousel'));

const Main: FC = () => {
	return (
		<main className="main">
			<ArrowUp />
			<HeaderVideo />
			<Navigation />

			<Routes>
				{/* <Route path='/page-not-found' element={<PageNotFound />} /> */}
				{/* <Route path='/thank' element={<Thank />} /> */}
				<Route
					path="/"
					element={
						<React.Suspense fallback={<Loading />}>
							<Home />
							<Clients />
							<Work />

							{/* <h2 className="carousel-title">Other projects</h2> */}

							<Carousel />

							<AboutMe />
							{/* <Clock /> */}
							{/* <Footer props={props} /> */}
						</React.Suspense>
					}
				/>

				{/* <Route
					// exact
					path="/other-projects"
					element={<OtherProjects link={props.toCurtainProject} />}
				/> */}

					{/* <Route
						path="other-projects/:id"
						element={<OtherProjectView />}
					/> */}

				{/* <Route path="*" element={ <Navigate to="/page-not-found" /> } /> */}
			</Routes>
		</main>
	);
}

export default Main;

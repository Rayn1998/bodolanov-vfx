import React, { FC, useRef } from 'react';
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
import Footer from 'components/Footer/Footer';
import OtherProjects from 'components/OtherProjects/OtherProjects';
// import OtherProjectView from '../OtherProjectView';
import PageNotFound from 'components/PageNotFound/PageNotFound';
// import Thank from '../Thank';

// const LazyWork = React.lazy(() => import('../Work/Work'));
// const LazyCarousel = React.lazy(() => import('../Carousel/Carousel'));

const Main: FC= () => {

	const homeRef = useRef<HTMLElement>(null);
	const workRef = useRef<HTMLElement>(null);
	const showreelsRef = useRef<HTMLElement>(null);
	const contactsRef = useRef<HTMLElement>(null);

	return (
		<main className="main">
			<ArrowUp />
			<HeaderVideo />
			<Navigation />

			<Routes>
				{/* <Route path='/thank' element={<Thank />} /> */}
				<Route
					path="/"
					element={
						<React.Suspense fallback={<Loading />}>
							<Home />
							<Clients />
							<Work ref={workRef} />

							<Carousel />

							<AboutMe />
							{/* <Clock /> */}
							<Footer />
						</React.Suspense>
					}
				/>

				<Route
					path="/other-projects"
					element={<OtherProjects />}
				/>

					{/* <Route
						path="other-projects/:id"
						element={<OtherProjectView />}
					/> */}

				{/* <Route path="*" element={ <Navigate to="/page-not-found" /> } /> */}
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</main>
	);
}

export default Main;

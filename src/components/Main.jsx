import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Clients from './Clients';
// import Work from './Work'
// import Carousel from './Carousel'
import AboutMe from './AboutMe';
import Footer from './Footer';
import HeaderVideo from './HeaderVideo';
import ArrowUp from './ArrowUp';
import OtherProjects from './OtherProjects';
import OtherProjectView from './OtherProjectView';
import Navigation from './Navigation';
import Loading from './Loading';
import PageNotFound from './PageNotFound';

const LazyWork = React.lazy(() => import('./Work'));
const LazyCarousel = React.lazy(() => import('./Carousel'));

function Main({ props }) {
	return (
		<main className="page">
			<ArrowUp scroll={props.scrollHome} show={props.arrowUpShow} />
			<HeaderVideo />
			<Navigation props={props} />

			<Routes>
				<Route path='/page-not-found' element={<PageNotFound />} />
				<Route
					exact
					path="/"
					element={
						<React.Suspense fallback={<Loading />}>
							<Home props={props} />
							<Clients />

							<React.Suspense fallback={<Loading />}>
								<LazyWork props={props} />
							</React.Suspense>

							<h2 className="carousel-title">Other projects</h2>
							<LazyCarousel />
							<AboutMe props={props} />
							{/* <Clock /> */}
							<Footer props={props} />
						</React.Suspense>
					}
				/>

				<Route
					path="/other-projects"
					element={<OtherProjects link={props.toCurtainProject} />}
				/>

					<Route
						path="other-projects/:id"
						element={<OtherProjectView />}
					/>

				<Route path="*" element={ <Navigate to="/page-not-found" /> } />
			</Routes>
		</main>
	);
}

export default Main;

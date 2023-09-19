import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Spinner from './components/Spinner';

const App = () => {
	const Photos = lazy(() => import('./components/Photos'));
	const Posts = lazy(() => import('./components/Posts'));

	return (
		<Router>
			<div className="App">
				<div className="header">
					<Link to="/">
						<div className="btn">Home</div>
					</Link>
					<Link to="/photos" id="photos-btn">
						<div className="btn">Photos</div>
					</Link>
					<Link to="/posts" id="posts-btn">
						<div className="btn">Posts</div>
					</Link>
				</div>
				<div className="content">
					<Routes>
						<Route
							path="/photos"
							element={
								<Suspense fallback={<Spinner />}>
									<Photos />
								</Suspense>
							}
						/>
						<Route
							path="/posts"
							element={
								<Suspense fallback={<Spinner />}>
									<Posts />
								</Suspense>
							}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;

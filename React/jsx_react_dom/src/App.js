import React, { useState, lazy, Suspense } from 'react';
import Spinner from './components/Spinner';

const App = () => {
	const [showContent, setShowContent] = useState(false);
	const Photos = lazy(() => import('./components/Photos'));
	const Posts = lazy(() => import('./components/Posts'));
	return (
		<div className="App">
			<div className="header">
				<button onClick={() => setShowContent(true)} id="show-content">
					Show Content
				</button>
				<button onClick={() => setShowContent(false)} id="hide-content">
					Hide Content
				</button>
			</div>
			<div className="content">
				{showContent ? (
					<>
						<Suspense fallback={<Spinner />}>
							<Photos />
							<Posts />
						</Suspense>
					</>
				) : null}
			</div>
		</div>
	);
};

export default App;

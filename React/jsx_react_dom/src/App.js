import React, { useState } from 'react';
import './index.css';
import Joke from './Joke';

const App = () => {
	const [category, setCategory] = useState('general');
	return (
		<>
			<div className="container">
				<div className="category-picker">
					<select onChange={(e) => setCategory(e.target.value)}>
						<option value="general">General</option>
						<option value="programming">Programming</option>
						<option value="dad">Dad</option>
						<option value="knock-knock">Knock-knock</option>
					</select>
				</div>
				<Joke category={category} />
			</div>
		</>
	);
};

export default App;

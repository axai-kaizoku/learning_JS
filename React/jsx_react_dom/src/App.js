import React from 'react';
import Home from './components/Home';
import Books from './components/Books';
import Secret from './components/Secret';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<h1>Book Store</h1>
				<div className="navigation">
					<Link to="/" id="home-link">
						Home
					</Link>
					<Link to="/books" id="books-link">
						Books
					</Link>
					<Link to="/secret" id="secret-link">
						Secret Collection
					</Link>
				</div>
				<div className="content">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/books/:id?" element={<Books />} />
						<Route path="/secret" element={<Secret />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;

import React, { useState } from 'react';
import Home from './components/Home';
import Books from './components/Books';
import Secret from './components/Secret';
import UserCtx from './components/UserCtx';
import Login from './components/Login';
import Protected from './components/Protected';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<BrowserRouter>
			<UserCtx.Provider
				value={{
					isLoggedIn,
					doLogin: (code) =>
						code === 'pizza' ? setIsLoggedIn(true) : setIsLoggedIn(false),
				}}
			>
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

							<Protected isLoggedIn={isLoggedIn} path="/secret">
								<Secret />
							</Protected>
							<Route path="/login" element={<Login />} />
						</Routes>
					</div>
				</div>
			</UserCtx.Provider>
		</BrowserRouter>
	);
};

export default App;

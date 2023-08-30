import React from 'react';
import './App.css';
import booksDb from './booksDb';
import Book from './Book';

const App = () => {
	return (
		<div className='app-container'>
			<div className='app-title'>Great Books</div>
			{booksDb.map((book) => (
				<Book
					title={book.title}
					author={book.author}
					key={book.id}
				/>
			))}
		</div>
	);
};

export default App;

import React from 'react';
import Home from './components/Home';
import Create from './components/Create';
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './components/Update';
import Delete from './components/Delete';

export function App() {
	return (
		<>
			<AppBar position='static'>
				<Typography
					variant='h4'
					padding={2.3}
					sx={{ flexGrow: 2 }}>
					Reduxjs
				</Typography>
			</AppBar>
			<div>
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/create'
							element={<Create />}
						/>
						<Route
							path='/edit/:id'
							element={<Update />}
						/>
						<Route
							path='/delete/:id'
							element={<Delete />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

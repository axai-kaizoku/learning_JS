import React from 'react';
import Home from './components/Home';
import Create from './components/Create';
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

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
			<div style={{ alignItems: 'center' }}>
				<Home />
				{/* <Create /> */}
			</div>
		</>
	);
}

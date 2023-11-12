import React from 'react';
import {
	Grid,
	Typography,
	Box,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Icon,
} from '@mui/material';

const Home = () => {
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justify='center'
			style={{ minHeight: '100vh' }}
			padding={12}>
			<Grid
				item
				xs={4}>
				<Box
					sx={{ backgroundColor: '#fffff' }}
					Width={500}
					Height={500}
					borderColor='#fff000'>
					<Typography variant='h3'>This is Home Page</Typography>
				</Box>
				<Box>
					<List dense={false}>
						<ListItem>
							<ListItemAvatar></ListItemAvatar>
							<ListItemText primary='Primary List Item' />
						</ListItem>
					</List>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Home;

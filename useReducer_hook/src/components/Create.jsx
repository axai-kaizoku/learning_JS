import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Box } from '@mui/material';

const Create = () => {
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justify='center'
			style={{ minHeight: '100vh' }}
			padding={5}>
			<Grid
				item
				xs={3}>
				<Card
					sx={{ maxWidth: 400, minWidth: 500 }}
					variant='elevation'>
					<CardContent>
						<Typography sx={{ fontSize: 24 }}>Create User</Typography>
						<br />
						<br />

						<TextField
							id='outlined-basic'
							label='Name'
							variant='outlined'
							fullWidth
						/>
						<br />
						<br />
						<TextField
							id='outlined-basic'
							label='Email'
							variant='outlined'
							fullWidth
						/>
					</CardContent>

					<Box
						padding={2}
						direction='column'
						textAlign='center'>
						<Button
							variant='contained'
							onSubmit={() => {}}>
							Submit
						</Button>
					</Box>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Create;

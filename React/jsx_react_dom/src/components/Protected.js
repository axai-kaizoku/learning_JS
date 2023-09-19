import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const Protected = ({ isLoggedIn, children }) => (
	<Route
		render={() =>
			isLoggedIn ? children : <Navigate to={{ pathname: '/login' }} />
		}
	/>
);

export default Protected;

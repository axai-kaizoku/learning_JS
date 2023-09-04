import React, { Component } from 'react';
import logger from './logger/index';
class ErrorManager extends Component {
	state = {
		error: false,
	};
	static getDerivedStateFromError() {
		return {
			error: true,
		};
	}
	componentDidCatch(error) {
		logger(error);
	}
	render() {
		if (this.state.error) {
			//Render UI
			return (
				<div className="error">
					<img
						src="https://media.tenor.com/MLlF-ChHnoQAAAAC/aesthetic-error.gif"
						alt="error"
					/>
					<div
						className="reset-btn"
						onClick={() => {
							this.setState({
								error: false,
							});
							this.props.onClose();
						}}
					>
						Close
					</div>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorManager;

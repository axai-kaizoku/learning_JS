import React, { Component } from 'react';

const NotificationText = ({ text }) => (
	<div className='notification-text'>{text || 'No Notifications'}</div>
);

const Title = ({ title }) => <h1>{title || 'Hello React App'}</h1>;

class Notification extends Component {
	state = {
		show: true,
	};
	toggleDisplay = () =>
		this.setState({
			show: !this.state.show,
		});
	render() {
		return (
			<>
				{<Title text={this.props.title} />}
				<div className='notification-widget'>
					<div
						className='toggle-btn'
						onClick={this.toggleDisplay}>
						N
					</div>
					{this.state.show ? <NotificationText text={this.props.text} /> : null}
				</div>
			</>
		);
	}
}

export default Notification;

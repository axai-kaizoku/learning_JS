import React from 'react';
import Notification from './components/Notification'; // Requires messages: Array
import NumberedButtons from './components/NumberedButtons'; // Requires num: Number
import StudentCard from './components/StudentCard'; // Requires student: Shape

const App = () => {
	return (
		<div className='main'>
			<Notification
				messages={['Please renew your account', 'You have 2 notifications']}
			/>
			<NumberedButtons num={5} />
			<StudentCard
				student={{
					name: 'Richie Salmon',
					id: 2099,
					active: true,
					courses: ['Deep Learning - Python', 'Advance JAVA'],
				}}
			/>
		</div>
	);
};

export default App;

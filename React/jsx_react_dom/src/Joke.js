import React from 'react';

const Joke = (props) => {
	const { punchline } = props;
	return (
		<div className="joke-panel">
			<div className="joke-punchline">{punchline}</div>
		</div>
	);
};

export default Joke;

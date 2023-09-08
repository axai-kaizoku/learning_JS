import React, { useState } from 'react';
import Config from './components/Config';
import TagsBuilder from './components/TagsBuilder';

const App = () => {
	const [scheduler, setScheduler] = useState(true);
	const [location, setLocation] = useState(false);
	const [tags, setTags] = useState([]);
	return (
		<div className="container">
			<Config
				title="Use Scheduler"
				toggleState={scheduler}
				onToggle={(val) => setScheduler(val)}
			/>
			<Config
				title="Use Location"
				toggleState={location}
				onToggle={(val) => setLocation(val)}
			/>
			<TagsBuilder
				tags={tags}
				addTags={(value) =>
					setTags([
						...tags,
						{
							id: new Date().getTime(),
							title: value,
						},
					])
				}
			/>
		</div>
	);
};

export default App;

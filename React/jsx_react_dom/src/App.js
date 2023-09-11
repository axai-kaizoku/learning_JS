import React, { useState, useReducer } from 'react';
import TaskContext from './components/TaskContext';
import Task from './components/Task';
import { v4 as uuid } from 'uuid';

const taskReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TASK':
			return {
				tasks: [{ id: uuid(), ...action.task }, ...state.tasks],
			};
		case 'DELETE_TASK':
			return {
				tasks: state.tasks.filter((task) => task.id !== action.id),
			};
		case 'TOGGLE_DONE':
			return {
				tasks: state.tasks.map((task) => {
					if (task.id === action.id) {
						return {
							...task,
							isDone: !task.isDone,
						};
					}
					return task;
				}),
			};
		case 'SET_PRIORITY':
			return {
				tasks: state.tasks.map((task) => {
					if (task.id === action.id) {
						return {
							...task,
							priority: action.priority,
						};
					}

					return task;
				}),
			};
		default: {
			throw new Error('This action could not be handled!');
		}
	}
};

const App = () => {
	const [task, setTask] = useState('');
	const [state, dispatch] = useReducer(taskReducer, { tasks: [] });
	return (
		<div className="app">
			<input
				id="task-input"
				type="text"
				placeholder="Add a task..."
				value={task}
				onChange={(e) => setTask(e.target.value)}
				onKeyUp={(e) => {
					if (e.keyCode === 13) {
						dispatch({
							type: 'ADD_TASK',
							task: {
								title: task,
								priority: 'normal',
								isDone: false,
							},
						});
						setTask('');
					}
				}}
			/>

			<div className="task-list">
				{state.tasks &&
					state.tasks.map(({ id, title, priority, isDone }) => (
						<TaskContext.Provider
							key={id}
							value={{
								id,
								title,
								priority,
								isDone,
								setPriority: (id, priority) => {
									dispatch({
										type: 'SET_PRIORITY',
										id,
										priority,
									});
								},
								setIsDone: (id) => {
									dispatch({
										type: 'TOGGLE_DONE',
										id,
									});
								},
								deleteTask: (id) => {
									dispatch({ type: 'DELETE_TASK', id });
								},
							}}
						>
							<Task />
						</TaskContext.Provider>
					))}
			</div>
		</div>
	);
};

export default App;

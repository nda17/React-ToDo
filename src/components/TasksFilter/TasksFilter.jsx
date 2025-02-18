import './TasksFilter.css';

export const TasksFilter = props => {
	const {
		data = [],
		currentStatusTask,
		handleDeleteCompleted = Function.prototype,
		handleFilter = Function.prototype,
		statusTask
	} = props;

	const handleClick = statusTask => {
		handleFilter(statusTask);
	};

	const notCompletedTasks = data.filter(
		item => item.status === statusTask.notCompleted
	).length;

	return (
		<>
			<span className="todo-count">{`${notCompletedTasks} items left`}</span>
			<ul className="filters">
				<li>
					<button
						onClick={() => handleClick()}
						className={`${currentStatusTask === statusTask.withoutStatus ? 'selected' : null}`}
					>
						All
					</button>
				</li>
				<li>
					<button
						onClick={() => handleClick(statusTask.notCompleted)}
						className={`${currentStatusTask === statusTask.notCompleted ? 'selected' : null}`}
					>
						Active
					</button>
				</li>
				<li>
					<button
						onClick={() => handleClick(statusTask.completed)}
						className={`${currentStatusTask === statusTask.completed ? 'selected' : null}`}
					>
						Completed
					</button>
				</li>
			</ul>
			<button
				onClick={() => handleDeleteCompleted()}
				className="clear-completed"
			>
				Clear completed
			</button>
		</>
	);
};

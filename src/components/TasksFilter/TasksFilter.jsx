import './TasksFilter.css';

export const TasksFilter = props => {
	const {
		data = [],
		activeTab,
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
						type="button"
						onClick={() => handleClick()}
						className={`${activeTab === statusTask.withoutStatus ? 'selected' : null}`}
					>
						All
					</button>
				</li>
				<li>
					<button
						type="button"
						onClick={() => handleClick(statusTask.notCompleted)}
						className={`${activeTab === statusTask.notCompleted ? 'selected' : null}`}
					>
						Active
					</button>
				</li>
				<li>
					<button
						type="button"
						onClick={() => handleClick(statusTask.completed)}
						className={`${activeTab === statusTask.completed ? 'selected' : null}`}
					>
						Completed
					</button>
				</li>
			</ul>
			<button
				type="button"
				onClick={() => handleDeleteCompleted()}
				className="clear-completed"
			>
				Clear completed
			</button>
		</>
	);
};

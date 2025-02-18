import './NewTaskForm.css';

export const NewTaskForm = props => {
	const { handleAddOrEdit = Function.prototype } = props;

	const handleKey = event => {
		if (event.key === 'Enter' && event.target.value.trim().length) {
			event.preventDefault();
			handleAddOrEdit(event.target.value);
			event.target.value = '';
		}
	};

	return (
		<input
			className="new-todo-value"
			placeholder="What needs to be done?"
			autoFocus
			onKeyDown={event => handleKey(event)}
		/>
	);
};

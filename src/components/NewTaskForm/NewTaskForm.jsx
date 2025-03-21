import { useState } from 'react';
import './NewTaskForm.css';

export const NewTaskForm = props => {
	const { handleAddOrEdit = Function.prototype } = props;
	const [task, setTask] = useState('');
	const [min, setMin] = useState('');
	const [sec, setSec] = useState('');

	const validateInput = value => {
		return /^(?:[0-9]|[1-5]\d|59)?$/.test(value);
	};

	const resetValue = () => {
		setTask('');
		setMin('');
		setSec('');
	};

	const handleChangeTask = event => {
		setTask(event.target.value.trim());
	};

	const handleChangeMin = event => {
		const inputValue = Number(event.target.value.trim());

		if (validateInput(inputValue)) {
			setMin(inputValue);
		}
	};

	const handleChangeSec = event => {
		const inputValue = Number(event.target.value.trim());
		if (validateInput(inputValue)) {
			setSec(inputValue);
		}
	};

	const handleKey = event => {
		if (
			event.target.closest('.new-task-form') &&
			event.key === 'Enter' &&
			task &&
			min &&
			sec
		) {
			event.preventDefault();
			handleAddOrEdit(task, min, sec);
			resetValue();
		}
	};

	return (
		<form className="new-task-form" onKeyDown={event => handleKey(event)}>
			<input
				className="task-value"
				value={task}
				placeholder="Task"
				onChange={event => handleChangeTask(event)}
				autoFocus
			/>
			<input
				className="task-timer-min"
				value={min}
				placeholder="Min"
				onChange={event => handleChangeMin(event)}
				autoFocus
			/>
			<input
				className="task-timer-sec"
				value={sec}
				placeholder="Sec"
				onChange={event => handleChangeSec(event)}
				autoFocus
			/>
		</form>
	);
};

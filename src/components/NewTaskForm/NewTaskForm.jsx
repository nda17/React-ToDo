import clsx from 'clsx';
import { useState } from 'react';
import styles from './NewTaskForm.module.css';

export const NewTaskForm = props => {
	const { handleAddOrEdit = Function.prototype } = props;
	const [task, setTask] = useState('');
	const [min, setMin] = useState('');
	const [sec, setSec] = useState('');

	const validateInput = value => {
		return /^(?:[0-9]|[1-5]\d|60)?$/.test(value);
	};

	const resetValue = () => {
		setTask('');
		setMin('');
		setSec('');
	};

	const handleChangeTask = e => {
		setTask(e.target.value.trim());
	};

	const handleChangeMin = e => {
		const inputValue = Number(e.target.value.trim());

		if (validateInput(inputValue)) {
			setMin(inputValue);
		}
	};

	const handleChangeSec = e => {
		const inputValue = Number(e.target.value.trim());
		if (validateInput(inputValue)) {
			setSec(inputValue);
		}
	};

	const handleKey = e => {
		if (
			e.target.closest('.new-todo-form') &&
			e.key === 'Enter' &&
			task &&
			min &&
			sec
		) {
			e.preventDefault();
			handleAddOrEdit(task, min, sec);
			resetValue();
		}
	};

	return (
		<form className={styles.form} onKeyDown={e => handleKey(e)}>
			<input
				className={clsx(styles['task-value'])}
				value={task}
				placeholder="Task"
				onChange={e => handleChangeTask(e)}
				autoFocus
			/>
			<input
				className={clsx(styles['task-timer-min'])}
				value={min}
				placeholder="Min"
				onChange={e => handleChangeMin(e)}
				autoFocus
			/>
			<input
				className={clsx(styles['task-timer-sec'])}
				value={sec}
				placeholder="Sec"
				onChange={e => handleChangeSec(e)}
				autoFocus
			/>
		</form>
	);
};

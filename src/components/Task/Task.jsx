import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';
import { TaskTimer } from '../TaskTimer/TaskTimer';
import './Task.css';

export const Task = props => {
	const [edit, setEdit] = useState(false);

	const {
		id,
		text,
		min,
		sec,
		activeTab,
		status,
		creationDate,
		statusTask,
		handleDelete = Function.prototype,
		handleAddOrEdit = Function.prototype,
		handleUpdateStatus = Function.prototype
	} = props;

	const handleStatus = () => {
		handleUpdateStatus(id);
	};

	const handleChecked = () => {
		handleUpdateStatus(id);
	};

	const handleEdit = () => {
		setEdit(prevState => !prevState);
	};

	const handleKey = event => {
		if (event.target.closest('.task') && event.key === 'Enter') {
			const typeAction = 'edit';
			event.preventDefault();
			handleAddOrEdit(event.target.value, min, sec, id, typeAction);
			handleEdit();
		}
	};

	return (
		<li
			className={`task ${edit ? 'editing' : ''} 
			${status === statusTask.completed ? 'completed' : ''} 
			${activeTab === statusTask.withoutStatus ? 'active' : ''} 
			${activeTab === statusTask.completed && status === statusTask.completed ? 'active' : ''} 
			${activeTab === statusTask.notCompleted && status === statusTask.notCompleted ? 'active' : ''}`}
		>
			<div className="view">
				<input
					autoFocus={true}
					className="toggle"
					type="checkbox"
					checked={status === statusTask.completed}
					onChange={handleChecked}
				/>
				<label>
					<span onClick={handleStatus} className="description">
						{text}
					</span>

					<TaskTimer
						min={min}
						sec={sec}
						status={status}
						statusTask={statusTask}
					/>

					<span className="created">
						{`created ${formatDistanceToNow(creationDate)}`}
					</span>
				</label>
				<button onClick={handleEdit} className="icon icon-edit"></button>
				<button
					onClick={() => handleDelete(id)}
					className="icon icon-destroy"
				></button>
			</div>
			{edit && (
				<input
					onKeyDown={event => handleKey(event)}
					type="text"
					className="edit"
					defaultValue={text}
				/>
			)}
		</li>
	);
};

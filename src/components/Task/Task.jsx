import { formatDistanceToNow } from 'date-fns';
import React, { Component } from 'react';
import './Task.css';

export class Task extends Component {
	state = {
		edit: false
	};

	render() {
		const {
			id,
			text,
			status,
			creationDate,
			statusTask,
			handleDelete = Function.prototype,
			handleAddOrEdit = Function.prototype,
			handleUpdateStatus = Function.prototype
		} = this.props;

		const { edit } = this.state;

		const handleStatus = () => {
			handleUpdateStatus(id);
		};

		const handleChecked = () => {
			handleUpdateStatus(id);
		};

		const handleEdit = () => {
			this.setState(prevState => ({
				edit: !prevState.edit
			}));
		};

		const handleKey = event => {
			if (event.key === 'Enter') {
				const typeAction = 'edit';
				event.preventDefault();
				handleAddOrEdit(event.target.value, id, typeAction);
				handleEdit();
			}
		};

		return (
			<li
				className={`task ${edit ? 'editing' : ''} ${status === statusTask.completed ? 'completed' : ''}`}
			>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={status === statusTask.completed}
						onChange={handleChecked}
					/>
					<label>
						<span onClick={handleStatus} className="description">
							{text}
						</span>
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
	}
}

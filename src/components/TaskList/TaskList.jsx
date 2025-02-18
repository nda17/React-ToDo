import React, { Component } from 'react';
import { EmptyPlaceholder, Task } from '../../components';
import './TaskList.css';

export class TaskList extends Component {
	render() {
		const {
			data,
			currentStatusTask,
			statusTask,
			handleAddOrEdit = Function.prototype,
			handleDelete = Function.prototype,
			handleUpdateStatus = Function.prototype
		} = this.props;

		const filterData = currentStatusTask => {
			if (currentStatusTask === statusTask.withoutStatus) {
				return data;
			} else if (currentStatusTask === statusTask.notCompleted) {
				const newData = data.filter(item => {
					return item.status === statusTask.notCompleted;
				});

				return newData;
			} else if (currentStatusTask === statusTask.completed) {
				const newData = data.filter(item => {
					return item.status === statusTask.completed;
				});

				return newData;
			}
		};

		const filteredData = filterData(currentStatusTask);

		return (
			<ul className="todo-list">
				{filteredData.map(item => {
					return (
						<div key={item.id}>
							<Task
								{...item}
								statusTask={statusTask}
								handleAddOrEdit={handleAddOrEdit}
								handleDelete={handleDelete}
								handleUpdateStatus={handleUpdateStatus}
							/>
						</div>
					);
				})}

				{!filteredData.length && <EmptyPlaceholder />}
			</ul>
		);
	}
}

import React, { Component } from 'react';
import { TaskList } from '../../components';
import './Main.css';

export class Main extends Component {
	render() {
		const {
			data = [],
			currentStatusTask,
			statusTask,
			handleAddOrEdit = Function.prototype,
			handleDelete = Function.prototype,
			handleUpdateStatus = Function.prototype
		} = this.props;

		return (
			<section className="main">
				<TaskList
					data={data}
					currentStatusTask={currentStatusTask}
					statusTask={statusTask}
					handleAddOrEdit={handleAddOrEdit}
					handleDelete={handleDelete}
					handleUpdateStatus={handleUpdateStatus}
				/>
			</section>
		);
	}
}

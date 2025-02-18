import React, { Component } from 'react';
import { TasksFilter } from '../../components';
import './Footer.css';

export class Footer extends Component {
	render() {
		const {
			data = [],
			currentStatusTask,
			handleFilter = Function.prototype,
			handleDeleteCompleted = Function.prototype,
			statusTask
		} = this.props;

		return (
			<footer className="footer">
				<TasksFilter
					data={data}
					currentStatusTask={currentStatusTask}
					handleFilter={handleFilter}
					handleDeleteCompleted={handleDeleteCompleted}
					statusTask={statusTask}
				/>
			</footer>
		);
	}
}

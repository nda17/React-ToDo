import React, { Component } from 'react';
import { NewTaskForm } from '../../components';
import './Header.css';

export class Header extends Component {
	render() {
		const { handleAddOrEdit = Function.prototype } = this.props;

		return (
			<header>
				<h1 className="title">Todos</h1>
				<NewTaskForm handleAddOrEdit={handleAddOrEdit} />
			</header>
		);
	}
}

import React, { Component } from 'react';
import { Footer, Header, Main } from './layout';

export class App extends Component {
	state = {
		data: [],
		currentStatusTask: 'without a status'
	};

	render() {
		const statusTask = {
			withoutStatus: 'without a status',
			notCompleted: 'not completed',
			completed: 'completed'
		};

		const handleFilter = status => {
			this.setState({ originalData: this.state.data });

			if (!status) {
				this.setState({ currentStatusTask: statusTask.withoutStatus });
			}

			if (status === statusTask.notCompleted) {
				this.setState({ currentStatusTask: statusTask.notCompleted });
			}

			if (status === statusTask.completed) {
				this.setState({ currentStatusTask: statusTask.completed });
			}
		};

		const handleDeleteCompleted = () => {
			const newData = this.state.data.filter(item => {
				return item.status === statusTask.notCompleted;
			});

			this.setState({ data: newData });
		};

		const handleDelete = id => {
			const newData = this.state.data.filter(item => {
				return item.id !== id;
			});

			this.setState({ data: newData });
		};

		const handleAddOrEdit = (value, id, typeAction = 'create') => {
			if (typeAction === 'create') {
				const item = {
					id: this.state.data.length + 1,
					text: value,
					creationDate: new Date(),
					status: statusTask.notCompleted
				};
				const newData = [...this.state.data, item];

				this.setState({ data: newData });
			} else {
				const newData = this.state.data.map(item => {
					if (item.id === id) {
						return { ...item, text: value };
					}

					return item;
				});

				this.setState({ data: newData });
			}
		};

		const handleUpdateStatus = id => {
			const newData = this.state.data.map(item => {
				if (item.id === id) {
					return {
						...item,
						status: `${
							item.status === statusTask.notCompleted
								? statusTask.completed
								: statusTask.notCompleted
						}`
					};
				}

				return item;
			});

			this.setState({ data: newData });
		};

		return (
			<section className="wrapper">
				<Header handleAddOrEdit={handleAddOrEdit} />
				<Main
					data={this.state.data}
					currentStatusTask={this.state.currentStatusTask}
					statusTask={statusTask}
					handleAddOrEdit={handleAddOrEdit}
					handleDelete={handleDelete}
					handleUpdateStatus={handleUpdateStatus}
				/>
				<Footer
					data={this.state.data}
					currentStatusTask={this.state.currentStatusTask}
					handleFilter={handleFilter}
					handleDeleteCompleted={handleDeleteCompleted}
					statusTask={statusTask}
				/>
			</section>
		);
	}
}

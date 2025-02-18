import { useState } from 'react';
import { Footer, Header, Main } from './layout';

export const App = () => {
	const [data, setData] = useState([]);
	const [currentStatusTask, setCurrentStatusTask] =
		useState('without a status');

	const statusTask = {
		withoutStatus: 'without a status',
		notCompleted: 'not completed',
		completed: 'completed'
	};

	const handleFilter = status => {
		if (!status) {
			setCurrentStatusTask(statusTask.withoutStatus);
		}

		if (status === statusTask.notCompleted) {
			setCurrentStatusTask(statusTask.notCompleted);
		}

		if (status === statusTask.completed) {
			setCurrentStatusTask(statusTask.completed);
		}
	};

	const handleDeleteCompleted = () => {
		const newData = data.filter(item => {
			return item.status === statusTask.notCompleted;
		});

		setData(newData);
	};

	const handleDelete = id => {
		const newData = data.filter(item => {
			return item.id !== id;
		});

		setData(newData);
	};

	const handleAddOrEdit = (value, id, typeAction = 'create') => {
		if (typeAction === 'create') {
			const item = {
				id: data.length + 1,
				text: value,
				creationDate: new Date(),
				status: statusTask.notCompleted
			};
			const newData = [...data, item];

			setData(newData);
		} else {
			const newData = data.map(item => {
				if (item.id === id) {
					return { ...item, text: value };
				}

				return item;
			});

			setData(newData);
		}
	};

	const handleUpdateStatus = id => {
		const newData = data.map(item => {
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

		setData(newData);
	};

	return (
		<section className="wrapper">
			<Header handleAddOrEdit={handleAddOrEdit} />
			<Main
				data={data}
				currentStatusTask={currentStatusTask}
				statusTask={statusTask}
				handleAddOrEdit={handleAddOrEdit}
				handleDelete={handleDelete}
				handleUpdateStatus={handleUpdateStatus}
			/>
			<Footer
				data={data}
				currentStatusTask={currentStatusTask}
				handleFilter={handleFilter}
				handleDeleteCompleted={handleDeleteCompleted}
				statusTask={statusTask}
			/>
		</section>
	);
};

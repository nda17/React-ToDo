import { EmptyPlaceholder, Task } from '../../components';
import './TaskList.css';

export const TaskList = props => {
	const {
		data,
		activeTab,
		statusTask,
		handleAddOrEdit = Function.prototype,
		handleDelete = Function.prototype,
		handleUpdateStatus = Function.prototype
	} = props;

	return (
		<ul className="todo-list">
			{data.map(item => {
				return (
					<div key={item.id}>
						<Task
							{...item}
							activeTab={activeTab}
							statusTask={statusTask}
							handleAddOrEdit={handleAddOrEdit}
							handleDelete={handleDelete}
							handleUpdateStatus={handleUpdateStatus}
						/>
					</div>
				);
			})}

			{!data.length && <EmptyPlaceholder />}
		</ul>
	);
};

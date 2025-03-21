import { TaskList } from '../../components';
import './Main.css';

export const Main = props => {
	const {
		data = [],
		activeTab,
		statusTask,
		handleAddOrEdit = Function.prototype,
		handleDelete = Function.prototype,
		handleUpdateStatus = Function.prototype
	} = props;

	return (
		<section className="main">
			<TaskList
				data={data}
				activeTab={activeTab}
				statusTask={statusTask}
				handleAddOrEdit={handleAddOrEdit}
				handleDelete={handleDelete}
				handleUpdateStatus={handleUpdateStatus}
			/>
		</section>
	);
};

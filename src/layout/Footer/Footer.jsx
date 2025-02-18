import { TasksFilter } from '../../components';
import './Footer.css';

export const Footer = props => {
	const {
		data = [],
		currentStatusTask,
		handleFilter = Function.prototype,
		handleDeleteCompleted = Function.prototype,
		statusTask
	} = props;

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
};

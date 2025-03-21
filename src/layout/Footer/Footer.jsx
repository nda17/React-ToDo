import { TasksFilter } from '../../components';
import './Footer.css';

export const Footer = props => {
	const {
		data = [],
		activeTab,
		handleFilter = Function.prototype,
		handleDeleteCompleted = Function.prototype,
		statusTask
	} = props;

	return (
		<footer className="footer">
			<TasksFilter
				data={data}
				activeTab={activeTab}
				handleFilter={handleFilter}
				handleDeleteCompleted={handleDeleteCompleted}
				statusTask={statusTask}
			/>
		</footer>
	);
};

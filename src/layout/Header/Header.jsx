import { NewTaskForm } from '../../components';
import './Header.css';

export const Header = props => {
	const { handleAddOrEdit = Function.prototype } = props;

	return (
		<header>
			<h1 className="title">Todos</h1>
			<NewTaskForm handleAddOrEdit={handleAddOrEdit} />
		</header>
	);
};

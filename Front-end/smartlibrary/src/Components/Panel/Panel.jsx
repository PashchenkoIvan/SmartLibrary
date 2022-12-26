import PanelType from './PanelType/PanelType';
import PanelTable from './PanelTable/PanelTable';
import s from './Panel.module.css';
import { createContext } from 'react';
import AdminRequests from '../../requests/AdminRequests';

export const AdminContext = createContext();

const Panel = props => {
	return (
		<div className={s.container}>
			<AdminContext.Provider value={{ AdminRequests }}>
				<PanelType />
				<PanelTable state={props.state} />
			</AdminContext.Provider>
		</div>
	);
};

export default Panel;

import PanelType from './PanelType/PanelType';
import PanelTable from './PanelTable/PanelTable';
import s from './Panel.module.css';
import { createContext } from 'react';
import AdminService from '../../services/AdminService';

export const AdminContext = createContext();

const Panel = props => {
	return (
		<div className={s.container}>
			<AdminContext.Provider value={{ AdminService }}>
				<PanelType />
				<PanelTable state={props.state} />
			</AdminContext.Provider>
		</div>
	);
};

export default Panel;

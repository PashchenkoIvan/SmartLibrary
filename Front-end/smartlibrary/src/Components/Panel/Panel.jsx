import PanelInfo from './PanelInfo/PanelInfo';
import PanelType from './PanelType/PanelType';
import PanelTable from './PanelTable/PanelTable';
import s from './Panel.module.css';

const Panel = () => {
	return (
		<div className={s.container}>
			<PanelType />
			<PanelInfo />
			<PanelTable />
		</div>
	);
};

export default Panel;

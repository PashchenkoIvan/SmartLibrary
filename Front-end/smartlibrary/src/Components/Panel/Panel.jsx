import PanelType from './PanelType/PanelType';
import PanelTable from './PanelTable/PanelTable';
import s from './Panel.module.css';

const Panel = props => {
	return (
		<div className={s.container}>
			<PanelType />
			<PanelTable state={props.state} />
		</div>
	);
};

export default Panel;

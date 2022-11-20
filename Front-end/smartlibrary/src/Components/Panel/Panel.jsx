import PanelTable from '../PanelTable/PanelTable';
import PanelType from '../PanelType/PanelType';
// import btnBlock from '../PanelType/PanelType';
import s from './Panel.module.css';

const Panel = () => {
    return(
        <div className={s.container}>
            <PanelType/>
            <PanelTable/>
            {/* <btnBlock/> */}
        </div>
    );
}

export default Panel;
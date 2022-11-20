import { Routes, Route } from 'react-router-dom';
import s from './PanelTable.module.css';

import Readers from './Readers/Readers';
import Books from './Books/Books';

const PanelTable = props => {
	return (
		<div className={s.container}>
			<div className={s.table}>
				<Routes>
					<Route path='readers' element={<Readers />} />
					<Route path='books' element={<Books />} />
				</Routes>
			</div>
		</div>
	);
};

export default PanelTable;

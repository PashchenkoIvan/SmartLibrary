import { Routes, Route } from 'react-router-dom';
import s from './App.css';

import AdminPage from './Pages/AdminMainPage/AdminPage';

function App() {
	return (
		<div className={s.wrapper}>
			<Routes>
				<Route path='/admin/*' element={<AdminPage />} />
			</Routes>
		</div>
	);
}

export default App;

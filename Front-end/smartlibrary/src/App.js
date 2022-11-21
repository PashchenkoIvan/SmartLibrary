import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import s from './App.css';

import AdminPage from './Pages/AdminMainPage/AdminPage';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<div className={s.wrapper}>
			<Header/>
			<Routes>
				<Route path='/admin/*' element={<AdminPage />} />
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;

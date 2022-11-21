import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import { BookCatalog } from './Components/index';
import s from './App.css';

import AdminPage from './Pages/AdminMainPage/AdminPage';
import Footer from './Components/Footer/Footer';

function App(props) {
	return (
		<div className={s.wrapper}>
			<Header />
			<Routes>
				<Route path='/catalog' element={<BookCatalog />} />
				<Route
					path='/admin/*'
					element={<AdminPage admin={props.state.admin} />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

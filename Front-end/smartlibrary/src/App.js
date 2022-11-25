import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import { BookCatalog } from './Components/';
import s from './App.css';
import MainPage from './Pages/MainPage/MainPage';
import PersonPage from './Pages/PersonPage/PersonPage';
import AdminPage from './Pages/AdminMainPage/AdminPage';
import Footer from './Components/Footer/Footer';
// import Form from './Components/Form/Form';

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
				{/* <Route path='/form' element={<Form/>}/> */}
				<Route
					path='/personPage'
					element={<PersonPage/>}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

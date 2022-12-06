import { Routes, Route } from 'react-router-dom';
import { BooksCatalog, Header, SelectedBook } from './Components/';
import s from './App.css';
import MainPage from './Pages/MainPage/MainPage';
import PersonPage from './Pages/PersonPage/PersonPage';
import AdminPage from './Pages/AdminMainPage/AdminPage';
import SingleBook from './Components/Panel/PanelTable/Books/BooksTable/SingleBook/SingleBook';
import Footer from './Components/Footer/Footer';
import TransHeader from './Components/TransHeader/TransHeader';
import { useEffect } from 'react';
import CreateEventReport from './Components/Panel/PanelTable/EventReports/CreateEventReport/CreateEventReport';
import EditEventReport from './Components/Panel/PanelTable/EventReports/EditEventReport/EditEventReport';
import CreateAnnualReport from './Components/Panel/PanelTable/AnnualReporting/CreateAnnualReport/CreateAnnualReport';
import CreateNews from './Components/Panel/PanelTable/News/CreateNews/CreateNews';
import EditNews from './Components/Panel/PanelTable/News/EditNews/EditNews';
import PublishNews from './Components/Panel/PanelTable/News/PublishNews/PublishNews';
// import Form from './Components/Form/Form';

function App(props) {
	// useEffect(() => {

	// }, window.location.href);
	return (
		<div className={s.wrapper}>
			{window.location.href == 'http://localhost:3000/main' ? (
				<TransHeader />
			) : (
				<Header />
			)}
			<Routes>
				<Route
					exact
					path='/catalog'
					element={<BooksCatalog data={props.state.data} />}
				/>
				<Route
					exact
					path='/catalog/:booksCategoryId'
					element={<BooksCatalog data={props.state.data} />}
				/>
				<Route
					path='/book-single/:currentBookId'
					element={
						<SingleBook admin={props.state.admin} data={props.state.data} />
					}
				/>
				<Route
					exact
					path='/:bookId'
					element={<SelectedBook data={props.state.data} />}
				/>
				<Route path='/main' element={<MainPage data={props.state.data} />} />
				<Route path='/admin/*' element={<AdminPage state={props.state} />} />
				<Route
					path='/admin/event-reports/create/:id'
					element={<CreateEventReport />}
				/>
				<Route
					path='/admin/event-reports/edit/:id'
					element={<EditEventReport />}
				/>
				<Route
					path='/admin/annual-reports/create/:id'
					element={<CreateAnnualReport />}
				/>
				<Route path='/admin/news/edit/:id' element={<EditNews />} />
				<Route path='/admin/news/publish/:id' element={<PublishNews />} />
				<Route path='/admin/news/create' element={<CreateNews />} />
				<Route path='/personPage' element={<PersonPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

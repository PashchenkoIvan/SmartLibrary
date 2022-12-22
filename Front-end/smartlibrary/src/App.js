import { Routes, Route } from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react';
import { BooksCatalog, Header, SelectedBook } from './Components/';

import MainPage from './Pages/MainPage/MainPage';
import PersonPage from './Pages/PersonPage/PersonPage';
import AdminPage from './Pages/AdminPage/AdminPage';
import CurrentReader from './Components/Panel/PanelTable/Readers/ReadersTable/CurrentReader/CurrentReader';
import SingleBook from './Components/Panel/PanelTable/Books/BooksTable/SingleBook/SingleBook';
import BookEdit from './Components/Panel/PanelTable/Books/BooksTable/BookEdit/BookEdit';
import BookCreate from './Components/Panel/PanelTable/Books/BooksTable/BookCreate/BookCreate';
import BooksCategories from './Components/Panel/PanelTable/Books/BooksTable/BooksCategories/BooksCategories';
import Footer from './Components/Footer/Footer';
import CreateEventReport from './Components/Panel/PanelTable/EventReports/CreateEventReport/CreateEventReport';
import EditEventReport from './Components/Panel/PanelTable/EventReports/EditEventReport/EditEventReport';
import CreateAnnualReport from './Components/Panel/PanelTable/AnnualReporting/CreateAnnualReport/CreateAnnualReport';
import CreateNews from './Components/Panel/PanelTable/News/CreateNews/CreateNews';
import RegPage from './Pages/RegPage/RegPage';
import Login from './Pages/LoginPage/Login';
import EditNews from './Components/Panel/PanelTable/News/EditNews/EditNews';
import PublishNews from './Components/Panel/PanelTable/News/PublishNews/PublishNews';
import ContactsPage from './Pages/ContactsPage/ContactsPage';
import FaqPage from './Pages/FaqPage/FaqPage';
import FormVisitors from './Components/Panel/PanelTable/Visitors/Form/Form';
import FormReport from './Components/Panel/PanelTable/ReportsToTheNews/Form/Form';

import { RequestsContext, AuthContext } from './index';

import './App.css';

function App(props) {
	const Requests = useContext(RequestsContext);

	const [header, setHeader] = useState(true);
	const [menuActive, setMenuActive] = useState(false);
	const [categories, setCategories] = useState({
		// 15 макетных категорий
		categories: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
		isLoading: true,
	});
	const [books, setBooks] = useState({
		// 12 макетных книг
		books: ['', '', '', '', '', '', '', '', '', '', '', ''],
		isLoading: true,
	});

	const { store } = useContext(AuthContext);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth();
		}

		console.log(store);
	}, []);

	useEffect(() => {
		Requests.GetBooks().then(res => {
			const books = res.data;
			setBooks({ books: books, isLoading: false });
		});

		Requests.GetBooksCategories().then(res => {
			const categories = res.data;
			setCategories({ categories: categories, isLoading: false });
		});
	}, [Requests]);

	const wrapper = useRef();
	const router = useRef();

	return (
		<div ref={wrapper} className='wrapper'>
			<Header
				menuActive={menuActive}
				setMenuActive={setMenuActive}
				header={header}
			/>
			<div className={'router'} ref={router}>
				<Routes>
					<Route
						path='/reader/:currentReaderId'
						element={
							<CurrentReader
								admin={props.state.admin}
								data={props.state.data}
								setHeader={setHeader}
							/>
						}
					/>
					<Route
						path='/book-single/:currentBookId'
						element={
							<SingleBook
								admin={props.state.admin}
								data={props.state.data}
								setHeader={setHeader}
							/>
						}
					/>
					<Route path='/book-single/create' element={<BookCreate />} />
					<Route
						path='/book-single/edit/:currentBookId'
						element={<BookEdit data={props.state.data} setHeader={setHeader} />}
					/>
					<Route
						path='/admin/event-reports/create/:id'
						element={<CreateEventReport setHeader={setHeader} />}
					/>
					<Route
						path='/admin/event-reports/edit/:id'
						element={
							<EditEventReport
								reports={props.state.admin.tables.eventReporting}
								setHeader={setHeader}
							/>
						}
					/>

					<Route
						path='/admin/news/edit/:id'
						element={
							<EditNews
								news={props.state.admin.tables.news}
								setHeader={setHeader}
							/>
						}
					/>
					<Route
						path='/admin/news/create'
						element={<CreateNews setHeader={setHeader} />}
					/>
					<Route
						path='/admin/news/publish/:id'
						element={
							<PublishNews
								news={props.state.admin.tables.news}
								setHeader={setHeader}
							/>
						}
					/>
					<Route
						path='/admin/annual-reports/create/:id'
						element={
							<CreateAnnualReport
								annualReports={props.state.admin.tables.annualReporting}
								setHeader={setHeader}
							/>
						}
					/>
					<Route path='/admin/visitors/form' element={<FormVisitors />} />
					<Route
						path='/admin/reports-to-the-news/form'
						element={<FormReport />}
					/>

					{store.status === 'user' ? (
						<Route
							path='/personPage'
							element={
								<PersonPage
									setHeader={setHeader}
									admin={props.state.admin}
									data={props.state.data}
								/>
							}
						/>
					) : store.status === 'librarian' ? (
						<Route
							path='/admin/*'
							element={<AdminPage state={props.state} setHeader={setHeader} />}
						/>
					) : (
						<>
							<Route path='/login' element={<Login setHeader={setHeader} />} />
							<Route
								path='/registration'
								element={<RegPage setHeader={setHeader} />}
							/>
						</>
					)}

					<Route
						path='/contacts'
						element={<ContactsPage setHeader={setHeader} />}
					/>
					<Route path='/faq/*' element={<FaqPage setHeader={setHeader} />} />

					<Route
						exact
						path='selected-book/:bookId'
						element={
							<SelectedBook data={props.state.data} setHeader={setHeader} />
						}
					/>
					<Route
						exact
						path='/catalog'
						element={
							<BooksCatalog
								books={books}
								categories={categories}
								setHeader={setHeader}
							/>
						}
					/>
					<Route
						path='/catalog/:booksCategoryId'
						element={
							<BooksCatalog
								books={books}
								categories={categories}
								setHeader={setHeader}
							/>
						}
					/>
					<Route
						path='/books/categories'
						element={
							<BooksCategories data={props.state.data} setHeader={setHeader} />
						}
					/>

					<Route
						index
						exact
						path='/'
						element={<MainPage books={books} setHeader={setHeader} />}
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;

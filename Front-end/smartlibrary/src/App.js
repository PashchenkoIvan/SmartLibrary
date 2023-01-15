import axios from 'axios';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react';
import { BooksCatalog, Header, SelectedBook, Error404 } from './Components/';

import MainPage from './Pages/MainPage/MainPage';
import PersonPage from './Pages/PersonPage/PersonPage';
import AdminPage from './Pages/AdminPage/AdminPage';
import CurrentReader from './Components/Panel/PanelTable/Readers/ReadersTable/CurrentReader/CurrentReader';
import SingleBook from './Components/Panel/PanelTable/Books/BooksTable/SingleBook/SingleBook';
import BookEdit from './Components/Panel/PanelTable/Books/BooksTable/BookEdit/BookEdit';
import BookCreate from './Components/Panel/PanelTable/Books/BooksInfo/BookCreate/BookCreate';
import BooksCategories from './Components/Panel/PanelTable/Books/BooksInfo/BooksCategories/BooksCategories';
import Footer from './Components/Footer/Footer';
import CreateEventReport from './Components/Panel/PanelTable/EventReports/CreateEventReport/CreateEventReport';
import EditEventReport from './Components/Panel/PanelTable/EventReports/EditEventReport/EditEventReport';
import CreateAnnualReport from './Components/Panel/PanelTable/AnnualReporting/CreateAnnualReport/CreateAnnualReport';
import CreateNews from './Components/Panel/PanelTable/News/NewsInfo/CreateNews/CreateNews';
import RegPage from './Pages/RegPage/RegPage';
import Login from './Pages/LoginPage/Login';
import EditNews from './Components/Panel/PanelTable/News/NewsTable/EditNews/EditNews';
import PublishNews from './Components/Panel/PanelTable/News/NewsTable/PublishNews/PublishNews';
import ContactsPage from './Pages/ContactsPage/ContactsPage';
import FaqPage from './Pages/FaqPage/FaqPage';
import FormVisitors from './Components/Panel/PanelTable/Visitors/Form/Form';
import ReportsToTheNewsForm from './Components/Panel/PanelTable/ReportsToTheNews/ReportsToTheNewsForm/ReportsToTheNewsForm';
import AlertPopPup from './Components/AlertPopPup/AlertPopPup';

import { ServicesContext } from './index';

import './App.css';
import './assets/styles/popUp.css';
import { useDispatch, useSelector } from 'react-redux';
import { SetStatus } from './redux/statusActions';

function App(props) {
	const Services = useContext(ServicesContext);

	const dispatch = useDispatch();
	const status = useSelector(state => state.status);

	const navigate = useNavigate();

	const [messageConfig, setMessageConfig] = useState({
		text: '',
		color: 'green',
	});

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

	const [readers, setReaders] = useState({
		// 12 макетных книг
		readers: ['', '', '', '', '', '', '', '', '', '', '', ''],
		isLoading: true,
	});

	useEffect(() => navigate('/', { replace: true }), [status.status]);

	useEffect(() => {
		if (localStorage.getItem('refresh')) {
			Services.AuthService.Refresh()
				.then(res => {
					dispatch(
						SetStatus(
							res == undefined ? 'anonym' : res ? 'librarian' : 'reader'
						)
					);
				})
				.catch(() => {
					Services.AuthService.Logout();
					dispatch(SetStatus('anonym'));
				});
		} else {
			dispatch(SetStatus('anonym'));
		}
	}, []);

	useEffect(() => {
		Services.BookService.GetBooks().then(res => {
			const books = res.data;
			console.log(books);
			if (res.data.length > 0) {
				setBooks({ books: books, isLoading: false });
			}
		});

		Services.BookService.GetBooksCategories()
			.then(res => {
				const categories = res.data;
				Services.categoriesList = res.data;
				if (res.data.length > 0) {
					setCategories({ categories: categories, isLoading: false });
				}
			})
			.finally(function (result) {
				console.log(Services.categoriesList);
			});

		axios.get('https://ualib-orion.herokuapp.com/api/v1/auth/').then(res => {
			const readers = res.data;
			setReaders({ readers: readers, isLoading: false });
			console.log(res.data);
		});
	}, []);

	const wrapper = useRef();
	const router = useRef();

	return (
		<div ref={wrapper} className='wrapper'>
			{status.loading ? (
				<div />
			) : (
				<>
					<AlertPopPup text={messageConfig.text} color={messageConfig.color} />
					<Header
						menuActive={menuActive}
						setMenuActive={setMenuActive}
						header={header}
						status={status.status}
					/>
					<div className={'router'} ref={router}>
						<Routes>
							{/* Главная страница */}
							<Route
								index
								exact
								path='/'
								element={
									<MainPage
										books={books}
										setHeader={setHeader}
										status={status.status}
									/>
								}
							/>

							{/* Страница книги */}
							<Route
								exact
								path='/selected-book/:bookName'
								element={
									<SelectedBook
										data={props.state.data}
										setHeader={setHeader}
										status={status.status}
									/>
								}
							/>

							{/* Каталог */}
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

							{/* Контакты и ЧЗВ */}
							<Route
								path='/contacts'
								element={<ContactsPage setHeader={setHeader} />}
							/>
							<Route
								path='/faq/*'
								element={<FaqPage setHeader={setHeader} />}
							/>

							{/* Авторизация / Регистрация */}
							<Route
								exact
								path='/login'
								element={
									status.status !== 'anonym' ? (
										<Navigate replace to='/404' />
									) : (
										<Login setHeader={setHeader} />
									)
								}
							/>
							<Route
								exact
								path='/registration'
								element={
									status.status !== 'anonym' ? (
										<Navigate replace to='/404' />
									) : (
										<RegPage setHeader={setHeader} />
									)
								}
							/>

							{/* Error 404 Page */}
							<Route
								exact
								path='/404'
								element={<Error404 setHeader={setHeader} />}
							/>

							{/* Страница пользователя */}
							<Route
								path='/personPage'
								element={
									status.status !== 'reader' ? (
										<Navigate replace to='/404' />
									) : (
										<PersonPage
											setHeader={setHeader}
											admin={props.state.admin}
											data={props.state.data}
										/>
									)
								}
							/>

							{/* Админка + страницы с админки */}
							<Route
								path='/admin/*'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<AdminPage state={props.state} setHeader={setHeader} />
									)
								}
							/>
							<Route
								path='/reader/:currentReaderId'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<CurrentReader
											admin={props.state.admin}
											data={props.state.data}
											readers={readers}
											setHeader={setHeader}
										/>
									)
								}
							/>
							<Route
								path='/book-single/:currentBookTitle'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<SingleBook
											admin={props.state.admin}
											books={books}
											setHeader={setHeader}
										/>
									)
								}
							/>
							<Route
								path='/book-single/create'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<BookCreate setHeader={setHeader} />
									)
								}
							/>
							<Route
								path='/books/categories'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<BooksCategories
											data={props.state.data}
											setHeader={setHeader}
										/>
									)
								}
							/>
							<Route
								path='/book-single/edit/:currentBookTitle'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<BookEdit books={books} setHeader={setHeader} />
									)
								}
							/>
							<Route
								path='/admin/event-reports/create/:id'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<CreateEventReport setHeader={setHeader} />
									)
								}
							/>
							<Route
								path='/admin/event-reports/edit/:id'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<EditEventReport
											reports={props.state.admin.tables.eventReporting}
											setHeader={setHeader}
										/>
									)
								}
							/>
							<Route
								path='/admin/news/edit/:id'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<EditNews
											news={props.state.admin.tables.news}
											setHeader={setHeader}
										/>
									)
								}
							/>
							<Route
								path='/admin/news/create'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<CreateNews setHeader={setHeader} />
									)
								}
							/>
							<Route
								path='/admin/news/publish/:id'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<PublishNews
											news={props.state.admin.tables.news}
											setHeader={setHeader}
										/>
									)
								}
							/>
							<Route
								path='/admin/annual-reports/create/:id'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<CreateAnnualReport
											annualReports={props.state.admin.tables.annualReporting}
											setHeader={setHeader}
										/>
									)
								}
							/>
							<Route
								path='/admin/reports-to-the-news/edit/:id'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<ReportsToTheNewsForm />
									)
								}
							/>
							<Route
								path='/admin/visitors/form'
								element={
									status.status !== 'librarian' ? (
										<Navigate replace to='/404' />
									) : (
										<FormVisitors />
									)
								}
							/>
						</Routes>
					</div>
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;

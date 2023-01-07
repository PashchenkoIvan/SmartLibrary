import { Routes, Route, Navigate } from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react';
import { BooksCatalog, Header, SelectedBook, Error404 } from './Components/';

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
import RegPage from './Pages/regPage/regPage';
import Login from './Pages/LoginPage/Login';
import EditNews from './Components/Panel/PanelTable/News/EditNews/EditNews';
import PublishNews from './Components/Panel/PanelTable/News/PublishNews/PublishNews';
import ContactsPage from './Pages/ContactsPage/ContactsPage';
import FaqPage from './Pages/FaqPage/FaqPage';
import FormVisitors from './Components/Panel/PanelTable/Visitors/Form/Form';
import FormReport from './Components/Panel/PanelTable/ReportsToTheNews/Form/Form';

import { RequestsContext, AuthContext } from './index';

import './App.css';
import AlertPopPup from './Components/AlertPopPup/AlertPopPup';

function App(props) {
	const Requests = useContext(RequestsContext);
	const Auth = useContext(AuthContext);

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

	useEffect(() => {
		if (localStorage.getItem('refresh') !== '') {
			Auth.AuthService.refreshTokens().then(
				res => (Auth.status = res ? 'librarian' : 'user')
			);
		} else {
			Auth.status = 'anonym';
		}
	}, []);

	useEffect(() => {
		Requests.BookRequests.GetBooks().then(res => {
			const books = res.data;
			console.log(books);
			if (res.data.length > 0) {
				setBooks({ books: books, isLoading: false });
			}
		});

		Requests.BookRequests.GetBooksCategories()
			.then(res => {
				const categories = res.data;
				Auth.categoriesList = res.data;
				if (res.data.length > 0) {
					setCategories({ categories: categories, isLoading: false });
				}
			})
			.finally(function (result) {
				console.log(Auth.categoriesList);
			});
	}, [Requests]);

	const wrapper = useRef();
	const router = useRef();

	return (
		<div ref={wrapper} className='wrapper'>
			<AlertPopPup text={messageConfig.text} color={messageConfig.color} />
			<Header
				menuActive={menuActive}
				setMenuActive={setMenuActive}
				header={header}
			/>
			<div className={'router'} ref={router}>
				<Routes>
					{/* Главная страница */}
					<Route
						index
						exact
						path='/'
						element={<MainPage books={books} setHeader={setHeader} />}
					/>

					{/* Страница книги */}
					<Route
						exact
						path='/selected-book/:bookName'
						element={
							<SelectedBook data={props.state.data} setHeader={setHeader} />
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
					<Route path='/faq/*' element={<FaqPage setHeader={setHeader} />} />

					{/* Авторизация / Регистрация */}
					<Route
						exact
						path='/login'
						element={
							Auth.status !== 'anonym' ? (
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
							Auth.status !== 'anonym' ? (
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
							Auth.status !== 'user' ? (
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
							Auth.status !== 'librarian' ? (
								<Navigate replace to='/404' />
							) : (
								<AdminPage state={props.state} setHeader={setHeader} />
							)
						}
					/>
					<Route
						path='/reader/:currentReaderId'
						element={
							Auth.status !== 'librarian' ? (
								<Navigate replace to='/404' />
							) : (
								<CurrentReader
									admin={props.state.admin}
									data={props.state.data}
									setHeader={setHeader}
								/>
							)
						}
					/>
					<Route
						path='/book-single/:currentBookId'
						element={
							Auth.status !== 'librarian' ? (
								<Navigate replace to='/404' />
							) : (
								<SingleBook
									admin={props.state.admin}
									data={props.state.data}
									setHeader={setHeader}
								/>
							)
						}
					/>
					<Route
						path='/book-single/create'
						element={
							Auth.status !== 'librarian' ? (
								<Navigate replace to='/404' />
							) : (
								<BookCreate setHeader={setHeader} />
							)
						}
					/>
					<Route
						path='/books/categories'
						element={
							Auth.status !== 'librarian' ? (
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
						path='/book-single/edit/:currentBookId'
						element={
							Auth.status !== 'librarian' ? (
								<Navigate replace to='/404' />
							) : (
								<BookEdit books={books} setHeader={setHeader} />
							)
						}
					/>
					<Route
						path='/admin/event-reports/create/:id'
						element={
							Auth.status !== 'librarian' ? (
								<Navigate replace to='/404' />
							) : (
								<CreateEventReport setHeader={setHeader} />
							)
						}
					/>
					<Route
						path='/admin/event-reports/edit/:id'
						element={
							Auth.status !== 'librarian' ? (
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
							Auth.status !== 'librarian' ? (
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
							Auth.status !== 'librarian' ? (
								<Navigate replace to='/404' />
							) : (
								<CreateNews setHeader={setHeader} />
							)
						}
					/>
					<Route
						path='/admin/news/publish/:id'
						element={
							Auth.status !== 'librarian' ? (
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
							Auth.status !== 'librarian' ? (
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
						path='/admin/visitors/form'
						element={
							Auth.status !== 'librarian' ? (
								<Navigate replace to='/404' />
							) : (
								<FormVisitors />
							)
						}
					/>
					<Route
						path='/admin/reports-to-the-news/form'
						element={
							Auth.status !== 'librarian' ? (
								<Navigate replace to='/404' />
							) : (
								<FormReport />
							)
						}
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;

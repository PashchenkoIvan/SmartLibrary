import { Routes, Route } from 'react-router-dom';
import { BooksCatalog, Header, SelectedBook } from './Components/';
import s from './App.css';
import MainPage from './Pages/MainPage/MainPage';
import PersonPage from './Pages/PersonPage/PersonPage';
import AdminPage from './Pages/AdminPage/AdminPage';
import CurrentReader from './Components/Panel/PanelTable/Readers/ReadersTable/CurrentReader/CurrentReader';
import SingleBook from './Components/Panel/PanelTable/Books/BooksTable/SingleBook/SingleBook';
import BookEdit from './Components/Panel/PanelTable/Books/BooksTable/BookEdit/BookEdit';
import BookCreate from './Components/Panel/PanelTable/Books/BooksTable/BookCreate/BookCreate';
import BooksCategories from './Components/Panel/PanelTable/Books/BooksTable/BooksCategories/BooksCategories';
import Footer from './Components/Footer/Footer';
import TransHeader from './Components/TransHeader/TransHeader';
import CreateEventReport from './Components/Panel/PanelTable/EventReports/CreateEventReport/CreateEventReport';
import EditEventReport from './Components/Panel/PanelTable/EventReports/EditEventReport/EditEventReport';
import CreateAnnualReport from './Components/Panel/PanelTable/AnnualReporting/CreateAnnualReport/CreateAnnualReport';
import CreateNews from './Components/Panel/PanelTable/News/CreateNews/CreateNews';
import RegisterPage from './Pages/regPage/regPage';
import Login from './Pages/LoginPage/Login';
import EditNews from './Components/Panel/PanelTable/News/EditNews/EditNews';
import PublishNews from './Components/Panel/PanelTable/News/PublishNews/PublishNews';
import ContactsPage from './Pages/ContactsPage/ContactsPage';
import FaqPage from './Pages/FaqPage/FaqPage';
import { useState } from 'react';

function App(props) {
	const [header, setHeader] = useState(true);

	return (
		<div className={s.wrapper}>
			{header ? <TransHeader /> : <Header />}
			<Routes>
				<Route
					index
					element={<MainPage data={props.state.data} setHeader={setHeader} />}
				/>

				<Route
					path='/admin/*'
					element={<AdminPage state={props.state} setHeader={setHeader} />}
				/>
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
					path='/admin/annual-reports/create/:id'
					element={
						<CreateAnnualReport
							annualReports={props.state.admin.tables.annualReporting}
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
					path='/admin/news/publish/:id'
					element={
						<PublishNews
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
					path='/personPage'
					element={
						<PersonPage
							setHeader={setHeader}
							admin={props.state.admin}
							data={props.state.data}
						/>
					}
				/>

				<Route path='/reg' element={<RegisterPage setHeader={setHeader} />} />
				<Route path='/login' element={<Login setHeader={setHeader} />} />
				<Route
					path='/contacts'
					element={<ContactsPage setHeader={setHeader} />}
				/>
				<Route path='/faq/*' element={<FaqPage setHeader={setHeader} />} />

				<Route
					exact
					path='/catalog'
					element={
						<BooksCatalog data={props.state.data} setHeader={setHeader} />
					}
				/>
				<Route
					path='/catalog/:booksCategoryId'
					element={
						<BooksCatalog data={props.state.data} setHeader={setHeader} />
					}
				/>
				<Route path='/book-single/create' element={<BookCreate />} />
				<Route
					path='/books/categories'
					element={
						<BooksCategories data={props.state.data} setHeader={setHeader} />
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
				<Route
					path='/book-single/edit/:currentBookId'
					element={<BookEdit data={props.state.data} setHeader={setHeader} />}
				/>
				<Route
					exact
					path='/:bookId'
					element={
						<SelectedBook data={props.state.data} setHeader={setHeader} />
					}
				/>
				<Route
					exact
					path='/:bookId'
					element={
						<SelectedBook data={props.state.data} setHeader={setHeader} />
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

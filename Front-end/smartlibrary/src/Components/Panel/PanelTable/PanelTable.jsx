import { Routes, Route } from 'react-router-dom';
import s from './PanelTable.module.css';

import Readers from './Readers/Readers';
import Books from './Books/Books';
import Applications from './Applications/Applications';
import Activities from './Activites/Activites';
import EventReporting from './EventReports/EventReports';
import AnnualReporting from './AnnualReporting/AnnualReporting';
import Invertory from './Invertory/Invertory';
import Librarians from './Librarians/Librarians';
import Affiliates from './Affiliates/Affiliates';
import News from './News/News';
import ReportsToTheNews from './ReportsToTheNews/ReportsToTheNews';
import Visitors from './Visitors/Visitors';
import {useEffect} from "react";
import AdminService from "../../../services/AdminService";
import {useDispatch} from "react-redux";
import {FetchOrders, FetchOrdersSuccess} from "../../../redux/actions/orderActions";

const PanelTable = props => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(FetchOrders())
		AdminService.GetOrders().then((res) => {
			dispatch(FetchOrdersSuccess(res.data))
		});
	});

	return (
		<div className={s.container}>
			<div className={s.table}>
				<Routes>
					<Route path='readers' element={<Readers />} />
					<Route path='books' element={<Books />} />
					<Route
						path='applications'
						element={
							<Applications
								applications={props.state.admin.tables.applications}
							/>
						}
					/>
					<Route
						path='activities'
						element={
							<Activities activities={props.state.admin.tables.activities} />
						}
					/>
					<Route
						path='event-reporting'
						element={
							<EventReporting
								eventReporting={props.state.admin.tables.eventReporting}
							/>
						}
					/>
					<Route
						path='annual-reporting'
						element={
							<AnnualReporting
								annualReporting={props.state.admin.tables.annualReporting}
							/>
						}
					/>
					<Route
						path='invertory'
						element={
							<Invertory invertory={props.state.admin.tables.invertory} />
						}
					/>
					<Route
						path='librarians'
						element={
							<Librarians librarians={props.state.admin.tables.librarians} />
						}
					/>
					<Route
						path='affiliates'
						element={
							<Affiliates affiliates={props.state.admin.tables.affiliates} />
						}
					/>
					<Route
						path='news'
						element={<News news={props.state.admin.tables.news} />}
					/>
					<Route
						path='reports-to-the-news'
						element={
							<ReportsToTheNews
								reportsToTheNews={props.state.admin.tables.reportsToTheNews}
							/>
						}
					/>
					<Route
						path='visitors'
						element={<Visitors visitors={props.state.admin.tables.visitors} />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default PanelTable;

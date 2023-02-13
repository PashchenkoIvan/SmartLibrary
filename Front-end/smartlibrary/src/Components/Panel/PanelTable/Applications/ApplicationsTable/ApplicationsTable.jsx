import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import QRCode from "react-qr-code";

import Table from '../../../../templates/Table/Table';

import sp from '../../../../../assets/styles/popUp.module.css';
import qrCode from '../../../img/qricon.png';
import AdminService from "../../../../../services/AdminService";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";


const ApplicationsTable = (props) => {

	const readers = useSelector(state => state.readers.readers);
	const books = useSelector(state => state.books.books);
	const [orderElements, setOrderElements] = useState([])

	useEffect(() => {
		if (readers.length > 0 && books.length > 0) {
			console.log(readers, books);
			AdminService.GetOrders().then((orders) => {
				setOrderElements(
						orders.data.map(a => {
							return (
								<div>
									<div>
										<Link
											to={`/reader/${a.user}`}
										>
											{readers.filter(r => r.id == a.user)[0].full_name}
										</Link>
									</div>
									<div>
										<Link
											to={`/book-single/${a.book}`}
										>
											{books.filter(b => b.id === a.book)[0].title}
										</Link>
									</div>
									<div>{new Date(Date.parse(a.order_date)).toLocaleString().slice(0, -3)}</div>
									<div>{books.filter(b => b.id === a.book)[0].inventory_num}</div>
									<Popup
										trigger={
											<div>
												<img src={qrCode} alt='' />
											</div>
										}
										modal
									>
										{close => (
											<>
												<div className={sp.header}>
													<span>{readers.filter(r => r.id === a.user)[0].full_name}</span>
													<button className={sp.closeBtn} onClick={close}>
														×
													</button>
												</div>
												<div className={sp.content}>
													<QRCode value={`/reader/${a.user}`} />
													<button className={sp.btn} onClick={() => {}}>
														Роздрукувати
													</button>
												</div>
											</>
										)}
									</Popup>
								</div>
							)
						})
				);
			})
		}
	}, [readers, books])

	return (
		<Table>
			<div name='applications'>
				<div name='keys-bar'>
					<span>ПІБ ({orderElements.length})</span>
					<span>Книга</span>
					<span>Дата</span>
					<span>Інвентарний номер</span>
					<span>QR-код</span>
				</div>
				<div name='table'>{orderElements}</div>
			</div>
		</Table>
	);
};

export default ApplicationsTable;

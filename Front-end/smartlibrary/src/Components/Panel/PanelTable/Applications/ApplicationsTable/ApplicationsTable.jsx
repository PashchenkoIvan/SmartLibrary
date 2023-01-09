import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import QRCode from "react-qr-code";

import Table from '../../../../templates/Table/Table';

import sp from '../../../../../assets/styles/popUp.module.css';
import qrCode from '../../../img/qricon.png';


const ApplicationsTable = ({ applications }) => {
	let applicationsElements = applications.map(a => {
		return (
			<div>
				<div>
					<Link
						to={`/reader/${a.user_id}`}
					>
						{a.name}
					</Link>
				</div>
				<div>
					<Link
						to={`/book-single/${a.book_title}`}
					>
						{a.book}
					</Link>
				</div>
				<div>{a.date}</div>
				<div>{a.number}</div>
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
								<span>{a.book}</span>
								<button className={sp.closeBtn} onClick={close}>
									×
								</button>
							</div>
							<div className={sp.content}>
								<QRCode value={JSON.stringify(a)} />
								<button className={sp.btn} onClick={() => {}}>
									Роздрукувати
								</button>
							</div>
						</>
					)}
				</Popup>
			</div>
		);
	});
	return (
		<Table>
			<div name='applications'>
				<div name='keys-bar'>
					<span>ПІБ ({applications.length})</span>
					<span>Книга</span>
					<span>Дата</span>
					<span>Інвентарний номер</span>
					<span>QR-код</span>
				</div>
				<div name='table'>{applicationsElements}</div>
			</div>
		</Table>
	);
};

export default ApplicationsTable;

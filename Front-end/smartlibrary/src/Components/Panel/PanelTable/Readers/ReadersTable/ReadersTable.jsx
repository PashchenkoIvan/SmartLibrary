import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import QRCode from "react-qr-code";

import Table from '../../../../templates/Table/Table'

import sp from '../../../../../assets/styles/popUp.module.css';
import qrCode from '../../../img/qricon.png';


const ReadersTable = props => {
	let readersElements = props.readers.map(r => {
		return (
			<div>
				<Link
					to={`/reader/${r.id}`}
				>
					{r.full_name}
				</Link>
				<div>
					<a href={'tel:' + r.phone_number}>
						{r.phone_number}
					</a>
				</div>
				<div>
					<a href={'mailto:' + r.email}>
						{r.email}
					</a>
				</div>
				<div>
					{
						r.is_disabled_person === true
						? 'так'
						: 'немає'
					}
				</div>
				<Popup
					trigger={
						<div>
							<img src={qrCode} alt='qr-code' />
						</div>
					}
					modal
				>
					{close => (
						<>
							<div className={sp.header}>
								<span>{r.full_name}</span>
								<button className={sp.closeBtn} onClick={close}>
									×
								</button>
							</div>
							<div className={sp.content}>
								<QRCode value={JSON.stringify(r)} />
								<button className={sp.btn} onClick={() => {}}>
									Роздрукувати
								</button>
							</div>
						</>
					)}
				</Popup>
				<div>
					{/* Кольори для статусу ['rgb(232, 238, 246)', 'rgb(248, 126, 115)'] */}
					{r.status}
				</div>
			</div>
		);
	});

	return (
		<Table>
			<div name='readers'>
				<div name='keys-bar'>
					<span>ПІБ {`(${props.readers.length})`}</span>
					<span>Телефон</span>
					<span>Email</span>
					<span>Особливі потреби</span>
					<span>QR-код</span>
					<span>Статус</span>
				</div>
				<div name='table'>{readersElements}</div>
			</div>
		</Table>
	);
};

export default ReadersTable;
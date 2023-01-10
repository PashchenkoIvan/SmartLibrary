import Popup from 'reactjs-popup';
import QRCode from "react-qr-code";

import Table from '../../../../../../templates/Table/Table'

import sp from '../../../../../../../assets/styles/popUp.module.css';
import qrCode from '../../../../../img/qricon.png';


const BooksHistoryTable = props => {
	let booksElements = props.books.map(b => {
		return (
			<div>
				<div>
                    {b.title}
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
								<span>{b.title}</span>
								<button className={sp.closeBtn} onClick={close}>
									×
								</button>
							</div>
							<div className={sp.content}>
								<QRCode value={JSON.stringify(b.title)} />
								<button className={sp.btn} onClick={() => {}}>
									Роздрукувати
								</button>
							</div>
						</>
					)}
				</Popup>
                <div>
					{b.date_of_issue}
				</div>
                <div>
					{b.return_date}
				</div>
				<div>
                    {/* [
                        "rgb(232, 238, 246)", // Повернена
                        "rgb(248, 126, 115)", // Не повернена
                        "rgb(251, 245, 135)", // Читається
                        "rgb(105, 195, 152)", // Заброньована
                    ] */}
					{b.status}
				</div>
                <div>
					{
                        b.status == 'B'
                            ? <button style={{backgroundColor: `#ffbb68`}}>Видати</button>
                            : ''
                    }
				</div>
			</div>
		);
	});

	return (
		<Table>
			<div name='books-history'>
				<div name='keys-bar'>
					<span>Назва книги {`(${props.books.length})`}</span>
					<span>QR-код</span>
					<span>Дата видачі</span>
					<span>Дата повернення</span>
					<span>Статус</span>
					<span></span>
				</div>
				<div name='table'>{booksElements}</div>
			</div>
		</Table>
	);
};

export default BooksHistoryTable;
import s from '../../../Popup/popUps.css';
import sp from '../../../Popup/popUps.module.css';
import { qrCode, QrIcon } from '../../img';

const tableData = () => {
	const keys = [
		{
			name: 'Назва книги',
			width: 30,
			property: 'title',
			isCounter: true,
			isLink: true,
			path: '/book-single/',
		},
		{
			name: 'Автор',
			width: 25,
			property: 'author',
		},
		{
			name: 'Інвертарний номер',
			width: 15,
			property: 'isbn',
		},
		{
			name: 'Статус',
			width: 10,
			property: 'status',
			propertyTitle: 'bookStatus',
			align: 'center',
			colors: [
				'rgb(232, 238, 246)', // Не має боргів
				'rgb(248, 126, 115)', // Є борги
			],
		},
		{
			name: 'QR-код',
			width: 12,
			property: 'qr',
			propertyTitle: 'title',
			isPopup: true,
			align: 'center',
			showPopUp(url) {
				return (
					<>
						<img src={QrIcon} alt='' />
						<button className={sp.btn} onClick={() => {}}>
							Роздрукувати
						</button>
					</>
				);
			},
		},
		{
			name: '',
			width: 8,
			property: 'btns',
			btns: [
				{
					path: '/book-single/edit/',
					name: 'Редагувати',
					color: '#36bbcb',
					isLink: true,
				},
			],
			align: 'flex-end',
		},
	];

	return keys;
};

export default tableData;

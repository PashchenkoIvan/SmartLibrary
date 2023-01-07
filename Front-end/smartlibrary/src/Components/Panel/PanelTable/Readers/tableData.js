import s from '../../../Popup/popUps.css';
import sp from '../../../Popup/popUps.module.css';
import { qrCode, QrIcon } from '../../img';

const tableData = () => {
    const keys = [
        {
            name: "ПІБ",
            width: 30,
            property: "full_name",
            isCounter: true,
            isLink: true,
            path: "/reader/"
        },
        {
            name: "Телефон",
            width: 15,
            property: "phone_number"
        },
        {
            name: "Email",
            width: 20,
            property: "email"
        },
        {
            name: "Особливі потреби",
            width: 15,
            property: "needs",
            align: "center",
        },
        {
            name: "QR-код",
            width: 10,
            property: "qr",
            propertyTitle: "name",
            isPopup: true,
            align: "center",
            showPopUp() {
                return(
                    <>
                        <img className={s.qrImg} src={QrIcon} alt="" />
						<button className={sp.btn} onClick={() => {}}>
							Роздрукувати
						</button>
					</>
				);
			},
		},
		{
			name: 'Статус',
			width: 10,
			property: 'status',
			propertyTitle: 'status',
			align: 'center',
			colors: ['rgb(232, 238, 246)', 'rgb(248, 126, 115)'],
		},
	];

	return keys;
};

export default tableData;

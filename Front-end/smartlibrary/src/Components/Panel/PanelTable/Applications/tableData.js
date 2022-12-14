import s from '../../../Popup/popUps.css';
import sp from '../../../Popup/popUps.module.css';
import { qrCode, QrIcon } from '../../img'

const tableData = () => {
    const keys = [
        {
            name: "ПІБ",
            width: 30,
            property: "name",
            isCounter: true,
            isLink: true,
            path: "/reader/"
        },
        {
            name: "Книга",
            width: 30,
            property: "book",
            isLink: true,
            path: "/book-single/"
        },
        {
            name: "Дата",
            width: 15,
            property: "date",
            align: "center",
        },
        {
            name: "Інвентарний номер",
            width: 15,
            property: "number",
            align: "center",
        },
        {
            name: "QR-код",
            width: 10,
            property: "qr",
            propertyTitle: "name",
            isPopup: true,
            align: "center",
            showPopUp(url) {
                return(
                    <>
                        <img src={QrIcon} alt="" />
						<button className={sp.btn} onClick={() => {}}>
							Роздрукувати
						</button>
                    </>
                )
            }
        },
    ]

    return (
        keys
    )
}

export default tableData;
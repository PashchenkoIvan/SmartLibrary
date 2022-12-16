import s from '../../../../../Popup/popUps.css';
import sp from '../../../../../Popup/popUps.module.css'
import { QrIcon } from '../../../../img'

const tableData = () => {
    const keys = [
        {
            name: "Назва книги",
            width: 40,
            property: "name",
            isCounter: true,
            isLink: true,
            path: '/book-single/'
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
                )
            }
        },
        {
            name: "Дата видачі",
            width: 15,
            property: "dateOfIssue",
            align: "center"
        },
        {
            name: "Дата повернення",
            width: 15,
            property: "dateOfreturn",
            align: "center"
        },
        {
            name: "Статус",
            width: 10,
            property: "status",
            propertyTitle: "status",
            align: "center",
            colors: [
                "rgb(232, 238, 246)", // Повернена
                "rgb(248, 126, 115)", // Не повернена
                "rgb(251, 245, 135)", // Читається
                "rgb(105, 195, 152)", // Заброньована
            ]
        },
        {
            name: "",
            width: 10,
            property: "btns",
            btns: [
                {
                    name: "Видати",
                    color: "#f5a623",
                    isLink: true,
                },
            ],
            align: "flex-end",
        },
    ]

    return (
        keys
    )
}

export default tableData;
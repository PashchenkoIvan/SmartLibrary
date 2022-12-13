import s from '../../../Popup/popUps.css';
import sp from '../../../Popup/popUps.module.css';
import { qrCode, QrIcon } from '../../img'

const tableData = () => {
    const keys = [
        {
            name: "Мета",
            width: 30,
            property: "threme",
            isCounter: true,
        },
        {
            name: "Місце",
            width: 25,
            property: "place"
        },
        {
            name: "Дата",
            width: 20,
            property: "date",
            align: "center"
        },
        {
            name: "",
            width: 25,
            property: "btns",
            btns: [
                {
                    path: "/admin/reports-to-the-news/form/",
                    name: "Редагувати",
                    color: "#36bbcb",
                    isLink: true,
                },
                {
                    name: "Видалити",
                    color: "rgb(248, 126, 115)",
                    isLink: true,
                }
            ],
            align: "flex-end",
        },
    ]

    return (
        keys
    )
}

export default tableData;
import s from '../../../Popup/popUps.css';
import sp from '../../../Popup/popUps.module.css';
import { qrCode, QrIcon } from '../../img'

const tableData = () => {
    const keys = [
        {
            name: "ПІБ",
            width: 15,
            property: "name",
            isCounter: true,
            isLink: true,
        },
        {
            name: "Місце проживання",
            width: 15,
            property: "home"
        },
        {
            name: "Дата народження",
            width: 15,
            property: "birthday",
            align: "center"
        },
        {
            name: "Коментар",
            width: 20,
            property: "comment",
            align: "center",
        },
        {
            name: "Книга",
            width: 15,
            property: "book",
            align: "center",
        },
        {
            name: "Дата",
            width: 10,
            property: "date",
            align: "center",
        },
        {
            name: "",
            width: 10,
            property: "btns",
            btns: [
                {
                    name: "Видалити",
                    color: "rgb(248, 126, 115)",
                    isLink: true
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
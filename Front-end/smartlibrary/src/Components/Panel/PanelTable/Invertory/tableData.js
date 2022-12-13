import s from '../../../Popup/popUps.css';
import sp from '../../../Popup/popUps.module.css';
import { qrCode, QrIcon } from '../../img'

const tableData = () => {
    const keys = [
        {
            name: "Назва сканованої книги",
            width: 40,
            property: "bookName",
            isCounter: true,
            isLink: true,
            path: "/book-single/"
        },
        {
            name: "Автор",
            width: 20,
            property: "bookAuthor"
        },
        {
            name: "Інвертарний номер",
            width: 15,
            property: "ISBN"
        },
        {
            name: "Сканована",
            width: 15,
            property: "isScanned",
            align: "center",
        },
        {
            name: "",
            width: 10,
            property: "btns",
            btns: [
                {
                    name: "Видалити",
                    color: "#f5a623",
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
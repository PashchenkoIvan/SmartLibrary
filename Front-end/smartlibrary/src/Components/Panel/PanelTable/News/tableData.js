import s from '../../../Popup/popUps.css';
import sp from '../../../Popup/popUps.module.css';
import { qrCode, QrIcon } from '../../img'

const tableData = () => {
    const keys = [
        {
            name: "Новина",
            width: 40,
            property: "name",
            isCounter: true,
        },
        {
            name: "Опис",
            width: 20,
            property: "description"
        },
        {
            name: "Дата",
            width: 20,
            property: "date"
        },
        {
            name: "",
            width: 20,
            property: "btns",
            btns: [
                {
                    path: "/admin/news/edit/",
                    name: "Редагувати",
                    color: "#36bbcb",
                    isLink: true,
                },
                {
                    path: "/admin/news/publish/",
                    name: "Публікувати",
                    color: "#36bbcb",
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
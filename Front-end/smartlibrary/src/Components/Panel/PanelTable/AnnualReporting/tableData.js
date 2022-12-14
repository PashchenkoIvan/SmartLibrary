import s from '../../../Popup/popUps.css';
import sp from '../../../Popup/popUps.module.css';
import { qrCode, QrIcon } from '../../img'

const tableData = () => {
    const keys = [
        {
            name: "Назва",
            width: 90,
            property: "name",
            isCounter: true,
        },
        {
            name: "",
            width: 10,
            property: "btns",
            btns: [
                {
                    path: "/admin/annual-reports/create/",
                    name: "Генерувати",
                    color: "#36bbcb",
                    isLink: true,
                },
                {
                    name: "Скачати",
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
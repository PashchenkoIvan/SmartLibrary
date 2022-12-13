import s from '../../../Popup/popUps.css';
import sp from '../../../Popup/popUps.module.css';
import { qrCode, QrIcon } from '../../img'

const tableData = () => {
    const keys = [
        {
            name: "Назва звіту",
            width: 60,
            property: "name",
            isCounter: true,
        },
        {
            name: "Дата створення",
            width: 31,
            property: "date"
        },
        {
            name: "",
            width: 9,
            property: "btns",
            btns: [
                {
                    path: "/admin/event-reports/edit/",
                    name: "Подивитися",
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
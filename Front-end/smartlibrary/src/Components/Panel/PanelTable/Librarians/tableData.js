import s from '../../../Popup/popUps.css';
import sp from '../../../Popup/popUps.module.css';
import { qrCode, QrIcon } from '../../img'

const tableData = () => {
    const keys = [
        {
            name: "ПІБ",
            width: 40,
            property: "name",
            isCounter: true,
        },
        {
            name: "Email",
            width: 20,
            property: "email"
        },
        {
            name: "Телефон",
            width: 20,
            property: "phone"
        },
        {
            name: "Назва",
            width: 20,
            property: "title",
        },
    ]

    return (
        keys
    )
}

export default tableData;
import s from '../../../Popup/popUps.css';
import sp from '../../../Popup/popUps.module.css';
import { qrCode, QrIcon } from '../../img'

const tableData = () => {
    const keys = [
        {
            name: "Назва",
            width: 40,
            property: "name",
            isCounter: true,
        },
        {
            name: "Адреса",
            width: 30,
            property: "address"
        },
        {
            name: "URL",
            width: 30,
            property: "url",
            isLink: true,
            path: ''
        },
    ]

    return (
        keys
    )
}

export default tableData;
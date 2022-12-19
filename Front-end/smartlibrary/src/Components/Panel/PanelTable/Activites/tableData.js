import s from '../../../Popup/popUps.css'
import sp from '../../../Popup/popUps.module.css'

import { qrCode, QrIcon } from '../../img'
import editFieldsData from './editFieldsData.js'
import { Form } from '../../../index'

const tableData = () => {
    const keys = [
        {
            name: "Назва заходу",
            width: 35,
            property: "name",
            isCounter: true,
        },
        {
            name: "Категорія",
            width: 20,
            property: "category"
        },
        {
            name: "Дата та час проведення",
            width: 17,
            property: "dateTime"
        },
        {
            name: "",
            width: 28,
            property: "btns",
            btns: [
                {
                    name: "Редагувати",
                    color: "#36bbcb",
                    isPopup: true,
                    popupTitle: "Редагувати захід",
                    showPopUp(url, el) {
                        return(
                            <Form main={editFieldsData(el)} btn={{ title: "Зберегти" }} />
                        )
                    }
                },
                {
                    name: "Видалити",
                    color: "rgb(248, 126, 115)",
                    isLink: true,
                },
                {
                    name: "Створити звіт",
                    color: "rgb(105, 195, 152)",
                    isLink: true,
                    path: '/admin/event-reports/create/'
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
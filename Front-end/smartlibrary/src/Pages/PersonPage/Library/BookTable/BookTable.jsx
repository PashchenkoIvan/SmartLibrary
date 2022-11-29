import s from './BookTable.module.css';
import React from 'react'

// const BookTable = () => {
//     let InfoMap = [
//         {name: 'Книга Узоры из бисера кошмаров', startData: '15.10.2022', endData: '25.11.2022', status: 'Повернена'},
//         {name: 'Книга Узоры из бисера кошмаров', startData: '15.10.2022', endData: '25.11.2022', status: 'Повернена'},
//         {name: 'Книга Узоры из бисера кошмаров', startData: '15.10.2022', endData: '25.11.2022', status: 'Повернена'},
//         {name: 'Книга Узоры из бисера кошмаров', startData: '15.10.2022', endData: '25.11.2022', status: 'Повернена'},
//         {name: 'Книга Узоры из бисера кошмаров', startData: '15.10.2022', endData: '25.11.2022', status: 'Повернена'},
//     ];
//     let InfoMapAdd = InfoMap.map(i => (<BookTableBlock bookName={i.name} startDate={i.startData} endDate={i.endData} status={i.status}/>));
//     return (
//         {InfoMapAdd}
//     );
// }

export const BookTableBlock = (props) => {
  return (
    <div className={s.container}>
        <h2>ПЕРЕЛІК КНИГ</h2>
        <div className={s.tableTitleBlock}>
            <p>Назва книги</p>
            <p>Дата видачі</p>
            <p>Дата повернення</p>
            <p>Статус</p>
        </div>
        <div className={s.bookBlock}>
            <a>{props.bookName}</a>
            <div className={s.right}>
                <p>{props.startDate}</p>
                <p>{props.endDate}</p>
                <p>{props.status}</p>
            </div>
        </div>
    </div>
  )
}
export default BookTableBlock;
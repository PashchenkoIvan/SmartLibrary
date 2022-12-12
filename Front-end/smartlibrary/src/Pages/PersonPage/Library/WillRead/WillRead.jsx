import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import s from './WillRead.module.css';

const WillRead = props => {
    const [readersData, setReadersData] = useState(props.admin.tables.readers);

    const willReadBooksMap = readersData[0].willRead.map(r =>
        {
            return(
                <div className={s.willReadeSingleBook}>
                    <div className={s.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                    <div className={s.bookName}>
                        <Link
                            to={`/${r.id}`}
                            className={s.bookLink}
                            onClick={() => {window.scrollTo(0, 0)}}
                        >
                            {r.name}
                        </Link>
                    </div>
                </div>
            )
        }
    )
    

    return (
        <div className={s.container}>
            <h2>БУДУ ЧИТАТИ</h2>
            <div className={s.bookBlock}>
                {willReadBooksMap}
            </div>
        </div>
    )
}


export default WillRead;
import s from './MainPage.module.css';
import React from 'react'
import { PopularBooks } from '../../Components';

const MainPage = props => {
  return (
    <div className={s.container}>
        <PopularBooks data={props.data} />
    </div>
  )
}
export default MainPage;
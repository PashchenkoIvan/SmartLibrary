import s from './MainPage.module.css';
import React from 'react'
import TransHeader from '../../Components/TransHeader/TransHeader';
import { PopularBooks } from '../../Components';

const MainPage = props => {
  return (
    <div className={s.container}>
        {/* <TransHeader /> */}
        <PopularBooks data={props.data} />
    </div>
  )
}
export default MainPage;
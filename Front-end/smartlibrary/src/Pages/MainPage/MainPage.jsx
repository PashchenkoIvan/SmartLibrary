import s from './MainPage.module.css';
import React from 'react'
import TransHeader from '../../Components/TransHeader/TransHeader';

const MainPage = () => {
  return (
    <div className={s.container}>
        <TransHeader/>
    </div>
  )
}
export default MainPage;
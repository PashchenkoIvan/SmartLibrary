import React from 'react';
import './container.css';
import { BookList } from '../../organisms';
import { Caption } from '../../molecules';
import { Btn } from '../../atoms';

const Container = () => {
  return (
    <div className='container'>
      <Caption />
      <BookList />
      <Btn btnText="Переглянути всі книжки" />
    </div>
  )
}

export default Container;
import React from 'react';
import './caption.css';
import { SubTitle, Title } from '../../atoms';

const Caption = () => {
  return (
    <div className='caption'>
      <SubTitle pText="Не знаєш, що робити - завітай в бібліотеку" />
      <Title pText="Популярні книжки" />
    </div>
  )
}

export default Caption;
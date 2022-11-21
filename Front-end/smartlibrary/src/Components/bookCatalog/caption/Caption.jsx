import React from 'react';
import { SubTitle, Title } from './';

import s from './caption.module.css';

const Caption = () => {
  return (
    <div className={s.caption}>
      <SubTitle pText="Не знаєш, що робити - завітай в бібліотеку" />
      <Title pText="Популярні книжки" />
    </div>
  )
}

export default Caption;
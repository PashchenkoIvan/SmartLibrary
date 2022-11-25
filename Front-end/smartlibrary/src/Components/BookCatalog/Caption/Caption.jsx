import React from 'react';
import { SubTitle, Title } from '.';

import s from './caption.module.css';

const Caption = () => {
  return (
    <div className={s.caption}>
      <SubTitle />
      <Title />
    </div>
  )
}

export default Caption;
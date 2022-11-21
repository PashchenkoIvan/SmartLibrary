import React from 'react';
import s from './subTitle.module.css';

const SubTitle = props => {
  return (
    <p className={s.subTitle}>{props.pText}</p>
  )
}

export default SubTitle;
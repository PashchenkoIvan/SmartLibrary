import React from 'react';
import s from './title.module.css';

const Title = props => {
  return (
    <p className={s.title}>{props.pText}</p>
  )
}

export default Title;
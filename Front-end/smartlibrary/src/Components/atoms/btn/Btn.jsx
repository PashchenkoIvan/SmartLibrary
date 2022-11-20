import React from 'react';
import './btn.css';

const Btn = props => {
  return (
    <button className='seeAllBook'>{props.btnText}</button>
  )
}

export default Btn;
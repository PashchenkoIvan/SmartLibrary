import React from 'react';
import './bookGanre.css';

const BookGanre = props => {
  return (
    <span className='bookGanre'>
      <img className='bookGanre-img' src={props.ganreImg} alt='' />
      <span>{props.ganreText}</span>
    </span>
  )
}

export default BookGanre;
import s from './PersonPage.module.css';
import React from 'react'
import Cabinet from './Cabinet/Cabinet';
import { Library } from './Library/Library';

const PersonPage = () => {
  return (
    <div className={s.container}>
        <Cabinet/>
        <Library/>
    </div>
  )
}
export default PersonPage;
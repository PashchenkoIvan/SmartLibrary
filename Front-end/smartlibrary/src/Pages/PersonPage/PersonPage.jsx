import s from './PersonPage.module.css';
import React from 'react'
import Cabinet from './Cabinet/Cabinet';
import { Library } from './Library/Library';
import Alerts from './Alerts/Alerts'

const PersonPage = props => {
  return (
    <div className={s.container}>
        <Cabinet />
        <Library admin={props.admin} data={props.data} />
        <Alerts />
    </div>
  )
}
export default PersonPage;
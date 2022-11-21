import './Form.css';
import React from 'react'

const Form = ({active, setActive}) => {
  return (
    <div className={active ? 'window active' : 'window'} onClick={() => setActive(false)}>
		<form action="ReaderInfo.jsx" onClick={e => e.stopPropagation()}>
			<div className='closeBtn'>
				<button onClick={() => setActive(false)}>X</button>
			</div>
			<h2>Add reader</h2>
			<div className='formInput'>
				<p>ПІБ</p>
				<input type="text" />
			</div>
			<div className='formInput'>
				<p>Email</p>
				<input type="text" />
			</div>
			<div className='formInput'>
				<p>Місце роботи</p>
				<input type="text" />
			</div>
			<div className='formInput'>
				<p>Дата народження</p>
				<input type="date" />
			</div>
			<div className='formInput'>
				<p>Домашня адреса</p>
				<input type="text" />
			</div>
			<div className='formInput'>
				<p>Телефон(за згодою)</p>
				<input type="text" />
			</div>
			<div className='formInput'>
				<p>Паспорт(за згодою)</p>
				<input type="text" />
			</div>
			<button className='addReaders'>Додати читача</button>
		</form>
	</div>
  )
}
export default Form;
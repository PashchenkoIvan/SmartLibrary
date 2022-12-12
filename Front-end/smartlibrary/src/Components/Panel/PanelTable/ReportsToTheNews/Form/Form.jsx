import s from './Form.module.css';
import React from 'react'
import { Link } from 'react-router-dom';

const Form = () => {
    const singleFieldCreator = (label, type, value, name) => {
		const typeChecker = () => {
			if (type === 'text' || type === 'number') {
				return (
					<>
						<label>{label}</label>
						<input type={type} value={value} name={name} />
					</>
				);
			} 
			else if (type === 'textarea') {
				return (
					<>
						<label>{label}</label>
						<textarea name={name}>{value}</textarea>
					</>
				);
			} else {

			}
		};
		return <li className={s.singleFieldBlock}>{typeChecker()}</li>;
	};
  return (
    <div className={s.container}>
        <div className={s.block}>
			<Link to='/admin/reports-to-the-news'>Повернутись</Link>
            <h1>ОНОВЛЕНЯ ЗВІТУ ДО НОВИНИ</h1>
            {singleFieldCreator('Мета, читацьке призначення', 'text', '', '')}
            {singleFieldCreator('Місце проведення', 'text', '', '')}
            {singleFieldCreator('Кількість присутніх', 'text', '', '')}
            {singleFieldCreator('Використання технічних засобів', 'text', '', '')}
            {singleFieldCreator('Ефективність', 'text', '', '')}
            {singleFieldCreator('Форма роботи', 'text', '', '')}
            {singleFieldCreator('Відповідальні за захід', 'text', '', '')}
            {singleFieldCreator('Висновки бібліотекаря', 'text', '', '')}
            {singleFieldCreator('Використана література', 'text', '', '')}
            {singleFieldCreator('Список учасників', 'text', '', '')}
			<button>Редагувати звіт до новини</button>
        </div>
    </div>
  )
}

export default Form
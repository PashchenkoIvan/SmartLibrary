import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

import s from './booksCategories.module.css';
import sp from './popUps.module.css';

const BooksCategories = props => {
	props.setHeader(false);
	const [categories, setCategories] = useState(props.data.categories);
	const categoriesMap = categories.map(c => (
		<div className={s.singleCategoryContainer}>
			<span className={s.categoryName}>{c.name}</span>
			<div>
				<div
					className={s.categoryColor}
					style={{ backgroundColor: c.color }}
				></div>
				<div className={s.categoryBtns}>
					<Popup
						trigger={<button className={s.categoryEdit}>Редагувати</button>}
						modal
					>
						{close => (
							<>
								<div className={sp.header}>
									<span>Редагувати категорію «{c.name}»</span>
									<button className={sp.closeBtn} onClick={close}>
										×
									</button>
								</div>
								<div className={sp.content}>
									<div>
										<label>Назва категорії</label>
										<input type='text' value={c.name} name={`${c.id}_name`} />
									</div>
									<div className={sp.colorContainer}>
										<label>Колір</label>
										<input
											id='colorInput'
											type='color'
											value={c.color}
											name={`${c.id}_color`}
										/>
									</div>
									<button
										className={sp.btn}
										onClick={() => {
											const colorInput = document.querySelector('#colorInput');
											console.log(colorInput.value);
										}}
									>
										Зберегти зміни
									</button>
								</div>
							</>
						)}
					</Popup>
					<button className={s.categoryDelete}>Видалити</button>
				</div>
			</div>
		</div>
	));

	return (
		<div className={s.container}>
			<Link to='/admin/books' className={s.btn}>
				До каталогу книжок
			</Link>
			<div className={s.contentBlock}>
				<h2 className={s.caption}>Управління категоріями</h2>
				<div className={s.main}>
					<div className={s.topBar}>
						<input className={s.colorInput} type='color' name='color' />
						<input
							className={s.inputCodeField}
							type='text'
							placeholder='Для додавання нової категорії введіть назву і виберіть колір'
						/>
						<button className={s.addCategoryBtn}>+ Додати категорію</button>
					</div>
					<div className={s.tableContainer}>
						<div className={s.keysBar}>
							<span>Назва категорії</span>
							<span>Колір</span>
						</div>
						<div className={s.valuesTable}>{categoriesMap}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BooksCategories;

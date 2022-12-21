import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { RequestsContext } from '../../../../../../index';

import s from './booksCategories.module.css';
import sp from './popUps.module.css';

const BooksCategories = props => {
	props.setHeader(false);

	const [newCategoryState, setNewCategoryState] = useState({
		color: "#000",
		title: ""
	})

	const [idToEdit, setIdToEdit] = useState(null);

	const Requests = useContext(RequestsContext);
	const [categories, setCategories] = useState({
		// 5 макетных категорий
		categories: ['', '', '', '', ''],
		isLoading: true,
	});
  
	// const change = (prop, event) => {
	// 	setCategories(categories.categories.map((obj, index) => {
	// 	   if (index == idToEdit) {
	// 		  return {...obj, prop: event.target.value};
	// 	   } else {
	// 		  return obj;
	// 	   }
	// 	}));
	//  }

	const categoriesMap = categories.categories.map((c, i) => (
		<form
			className={s.singleCategoryContainer}
			onSubmit={
				e => { 
					e.preventDefault(); 
					Requests.DeleteBooksCategory(c.title).then(res => {console.log(res.data);})
				}
			}
		>
			<span className={s.categoryName}>{c.title}</span>
			<div>
				<div
					className={s.categoryColor}
					style={{ backgroundColor: c.color, border: "1px solid #ccc" }}
				></div>
				<div className={s.categoryBtns}>
					<Popup
						trigger={<button className={s.categoryEdit} onClick={() => {setIdToEdit(i); console.log(idToEdit);}}>Редагувати</button>}
						modal
					>
						{close => (
							<>
								<div className={sp.header}>
									<span>Редагувати категорію «{c.title}»</span>
									<button className={sp.closeBtn} onClick={close}>
										×
									</button>
								</div>
								<form
									className={sp.content}
									onReset={
										e => { 
											e.preventDefault(); 
											Requests.ChangeBooksCategory(c.title, categories.categories[idToEdit]).then(res => {console.log(res.data);})
										}
									}
								>
									<div>
										<label>Назва категорії</label>
										<input
											type='text'
											value={categories.categories[i].title}
											name='title'
											// onChange={event => change('title', event)}
										/>
									</div>
									<div className={sp.colorContainer}>
										<label>Колір</label>
										<input
											id='colorInput'
											type='color'
											value={categories.categories[i].color}
											name='color'
											// onChange={event => change('color', event)}
											
										/>
									</div>
									<input
										className={sp.btn}
										type="reset"
										value='Зберегти зміни'
									/>
								</form>
							</>
						)}
					</Popup>
					<input className={s.categoryDelete} type='submit' value='Видалити' />
				</div>
			</div>
		</form>
	));

	useEffect(() => {
		Requests.GetBooksCategories().then(res => {
			console.log(res.data);
			const categories = res.data;
			setCategories({categories: categories, isLoading: false})
		})
	}, [Requests]);

	return (
		<div className={s.container}>
			<Link to='/admin/books' className={s.btn}>
				До каталогу книжок
			</Link>
			<div className={s.contentBlock}>
				<h2 className={s.caption}>Управління категоріями</h2>
				<div className={s.main}>
					<form className={s.topBar} onSubmit={
						e => { 
							e.preventDefault(); 
							// console.log({...newCategoryState});
							Requests.AddBooksCategory({...newCategoryState}).then(res => {console.log(res.data);})
							}
						}
					>
						<input className={s.colorInput}
							type='color'
							name='color'
							value={newCategoryState.color}
							onChange={e =>
								setNewCategoryState({
									...newCategoryState,
									color: e.target.value,
								})
							}
						/>
						<input
							className={s.inputCodeField}
							type='text'
							value={newCategoryState.title}
							placeholder='Для додавання нової категорії введіть назву і виберіть колір'
							onChange={e =>
								setNewCategoryState({
									...newCategoryState,
									title: e.target.value,
								})
							}
							required
						/>
						<input className={s.addCategoryBtn} type='submit' value='+ Додати категорію' />
					</form>
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

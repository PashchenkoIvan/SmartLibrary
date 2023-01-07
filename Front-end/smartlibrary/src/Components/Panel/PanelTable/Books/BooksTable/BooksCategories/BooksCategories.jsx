import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import ContentLoader from "react-content-loader"

import { RequestsContext } from '../../../../../../index';

import s from './booksCategories.module.css';
import sp from '../../../../../../assets/styles/popUp.module.css';
import f from '../../../../../../assets/styles/form.module.css';


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

	useEffect(() => {
		Requests.BookRequests.GetBooksCategories().then(res => {
			console.log(res.data);
			const categories = res.data;
			setCategories({categories: categories, isLoading: false})
		})
	}, [Requests]);

	const categoriesMap = categories.categories.map((c, i) => {
		const skeletonLoad =
			<ContentLoader 
				speed={2}
				viewBox="0 0 100 10"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
				{...props}
			>
				<rect x="22" y="3.5" rx="1" ry="1" width="2.5" height="2.5" />
				<rect x="1" y="3.5" rx="1" ry="1" width="20" height="2.5" />
			</ContentLoader>

		const categoryData = c.title;

		return (
			<div className={s.singleCategoryContainer}>
				<span className={s.categoryName}>{categories.isLoading ? skeletonLoad : categoryData}</span>
				<div>
					<div
						className={s.categoryColor}
						style={{ backgroundColor: c.color, border: "1px solid #ccc" }}
					></div>
					<div className={s.categoryBtns}>
						<Popup
							trigger={<button className={s.categoryEdit}>Редагувати</button>}
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
										onSubmit={
											e => { 
												e.preventDefault(); 
												console.log(categories.categories[idToEdit]);
												console.log(idToEdit);
												Requests.BookRequests.ChangeBooksCategory(idToEdit+1, categories.categories[idToEdit]).then(res => {console.log(res.data);})
											}
										}
									>
										<ul className={`${f.fieldsList} + ${sp.fields}`}>
											<li className={f.fieldBlock}>
												<label>Назва категорії</label>
												<input
													type='text'
													value={c.title}
													name='title'
													disabled
												/>
											</li>
											<li className={f.fieldBlock}>
												<label>Колір</label>
												<input
													type='color'
													value={c.color}
													name='color'
													onChange={e => setCategories({
														...categories,
														categories:
															categories.categories.map(obj =>
																obj.title == c.title
																	? {...obj, color: e.target.value}
																	: obj,
														)})
													}
												/>
											</li>
										</ul>
										<div className={f.btns}>
											<input
												className={f.btn}
												type="submit"
												value='Зберегти зміни'
												onClick={() => setIdToEdit(i)}
											/>
										</div>
									</form>
								</>
							)}
						</Popup>
					</div>
				</div>
			</div>
		)
	});

	return (
		<div className={s.container}>
			<Link to='/admin/books' className={s.btn}>
				До каталогу книжок
			</Link>
			<div className={s.contentBlock}>
				<h2 className={s.caption}>Управління категоріями</h2>
				<div className={s.main}>
					{/* <form className={s.topBar} onSubmit={
						e => { 
							e.preventDefault(); 
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
					</form> */}
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

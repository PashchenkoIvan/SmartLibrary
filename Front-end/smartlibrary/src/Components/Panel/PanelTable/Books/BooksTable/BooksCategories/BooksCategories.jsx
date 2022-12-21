import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import ContentLoader from "react-content-loader"
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
  
	const change = (event) => {
		
	 }

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
												// Requests.ChangeBooksCategory(c.title, categories.categories[idToEdit]).then(res => {console.log(res.data);})
											}
										}
									>
										<div>
											<label>Назва категорії</label>
											<input
												type='text'
												value={categories.categories[i].title}
												name='title'
												disabled
											/>
										</div>
										<div className={sp.colorContainer}>
											<label>Колір</label>
											<input
												id='colorInput'
												type='color'
												value={categories.categories[i].color}
												name='color'
												onChange={e => setCategories({
													...categories,
													categories:
														categories.categories.map((obj, index) =>
															obj.title == c.title
																? {...obj, color: e.target.value}
																: obj,
													)})
												}
												
											/>
										</div>
										<input
											className={sp.btn}
											type="submit"
											value='Зберегти зміни'
											onClick={() => setIdToEdit(() => i)}
										/>
									</form>
								</>
							)}
						</Popup>
					</div>
				</div>
			</div>
		)
	});

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

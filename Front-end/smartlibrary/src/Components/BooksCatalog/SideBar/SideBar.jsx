import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './sideBar.module.css';

const booksCategories = [
  {
    id: "detektyvy",
    name: "Детективи",
  },
  {
    id: "dytyacha-yunatska",
    name: "Дитяча / Юнацька",
  },
  {
    id: "dovidkovi-vydannya",
    name: "Довідкові видання",
  },
]

const SideBar = props => {
  const isActive = (isActive) => isActive ? 'activeCategoryLink' : '';
  const booksCategoryCounter = (categoryId) => { return props.books.filter((el) => el.bookCategories.filter((el) => el === `${categoryId}`).length > 0).length }
  const addBooksCategoriesMap = booksCategories.map((currentCategory) =>
    <li className={s.singleCategory}>
      <NavLink to={`/catalog/${currentCategory.id}`} className={navData => (navData.isActive ? s.activeCategoryLink : '') + ' ' + s.categoryLink}>
        <p>{currentCategory.name}</p>
        <span>{booksCategoryCounter(`${currentCategory.id}`)}</span>
      </NavLink>
    </li>  
  )

  return (
    <div className={s.container}>
      <h3 className={s.caption}>Категорії</h3>
      <ul className={s.categoryList}>
        {addBooksCategoriesMap}
      </ul>
    </div>
  )
}

export default SideBar;
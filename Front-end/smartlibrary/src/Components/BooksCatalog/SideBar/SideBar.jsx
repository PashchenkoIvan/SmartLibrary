import { NavLink } from 'react-router-dom';
import ContentLoader from "react-content-loader"
import s from './sideBar.module.css';

const SideBar = props => {
  const isActive = (isActive) => isActive ? 'activeCategoryLink' : '';
  const isLoading = props.isLoading;

  // const booksCategoryCounter = (categoryId) =>
  //   {
  //     return props.data.books.filter((el) => el.bookCategories
  //                       .filter((el) => el === `${categoryId}`)
  //                       .length > 0)
  //                       .length
  //   }

  

  const addBooksCategoriesMap = props.categories.categories.map(c =>
    {
      const skeletonLoad =
      <ContentLoader 
        speed={2}
        viewBox="0 0 100 10"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="94" y="2" rx="5" ry="5" width="6" height="6" />
        <rect x="4" y="2" rx="3" ry="3" width="88" height="6" />
      </ContentLoader>

      const categoryData =
      <>
        <NavLink to={`/catalog/${c.title}`} className={navData => (navData.isActive ? s.activeCategoryLink : '') + ' ' + s.categoryLink}>
          <p>{c.title}</p>
          {/* <span>{booksCategoryCounter(`${currentCategory.id}`)}</span> */}
        </NavLink>
      </>

      return(
        <li className={s.singleCategory}>
          {isLoading ? skeletonLoad : categoryData}
        </li> 
      )
    }
     
  )

  return (
    <div className={s.container}>
      <h3 className={s.caption}>Категорії</h3>
      <ul className={s.categoryList}>
        {console.log(props.categories)}
        {addBooksCategoriesMap}
      </ul>
    </div>
  )
}

export default SideBar;
import { useEffect } from "react";
import ContentLoader from "react-content-loader"
import { BookGanre, BookAuthor, BookName } from '.';

import s from './book.module.css';

const Book = props => {
  const imgUrl = props.cover_img_path;
  const isLoading = props.isLoading;

  useEffect(() => {
    // console.log(props.isLoading);
  }, [props.isLoading])

  const skeletonLoad =
    <ContentLoader 
      speed={2}
      viewBox="0 0 262 408"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="5" ry="5" width="100%" height="85.79%" />
      <rect x="2%" y="88.5%" rx="10" ry="10" width="90%" height="3.6%" />
      <rect x="2%" y="93.3%" rx="10" ry="10" width="70%" height="3.2%" />
    </ContentLoader>

    const bookData = 
      <>
        <div className={s.bookCover} style={{ backgroundImage: 'url(' + imgUrl + ')' }}>  
          <BookGanre category={props.category} />
          <div className={s.bookEffect}></div>
          <div className={s.bookLight}></div>
        </div>
        <div className={s.bookInside}></div>
        <div className={s.bookInfo}>  
          <BookAuthor author={props.author} />
          <BookName title={props.title} />
        </div>
      </>

  return (
    <div className={s.book}>
      {isLoading ? skeletonLoad : bookData}
    </div>
  )
}

export default Book;
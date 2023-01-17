import s from './bookImg.module.css';

const BookImg = props => {
  return (
    <div className={s.container} style={{ backgroundImage: 'url(' + props.cover_img_path + ')' }}>
      <div className={s.insetShadow}></div>
      <div className={s.backCover} style={{ backgroundImage: 'url(' + props.cover_img_path + ')' }}></div>
    </div>
  )
}

export default BookImg;
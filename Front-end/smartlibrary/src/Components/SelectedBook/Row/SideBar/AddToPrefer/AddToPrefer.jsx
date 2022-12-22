import s from './addToPrefer.module.css';

const AddToPrefer = props => {
  return (
    <div className={s.container}>
      <button className={s.btn} style={{backgroundColor: '#36BBCB'}}>Замовити</button>
      <span>або</span>
      {
        true
          ? <button className={s.btn} style={{backgroundColor: '#bfbfbf'}}>Читати пізніше</button>
          : <button className={s.btn} style={{backgroundColor: '#f5a623'}}>Додане в обране</button>
      }
    </div>
  )
}

export default AddToPrefer;
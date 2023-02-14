import s from './addToPrefer.module.css';
import UserService from "../../../../../services/UserService";
import {useDispatch, useSelector} from "react-redux";
import {SetMessage} from "../../../../../redux/actions/messageActions";

const AddToPrefer = (props) => {

    const readers = useSelector(state => state.readers);
    const dispatch = useDispatch();

     return (
       <div className={s.container}>
         <button
             className={s.btn}
             style={{backgroundColor: '#36BBCB'}}
             onClick={() => {
                 if (!readers.loading) {
                     const date = new Date().toISOString();
                     const email = localStorage.getItem('email');
                     const id = readers.readers.filter(r => r.email === email)[0].id;
                     UserService.CreateOrder(props.book.book.id, id, date).then(() => {
                         dispatch(SetMessage('Успішно замовлено', 'success'))
                     });
                 } else {
                     dispatch(SetMessage('Зачекайте', 'warning'))
                 }
                }
             }
         >
             Замовити
         </button>
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
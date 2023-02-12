import s from './addToPrefer.module.css';
import {useContext} from "react";
import {ServicesContext} from "../../../../../index";

const AddToPrefer = ({ book }) => {

    const Services = useContext(ServicesContext);

     return (
       <div className={s.container}>
         <button
             className={s.btn}
             style={{backgroundColor: '#36BBCB'}}
             onClick={() => {
                 const date = new Date().toISOString()
                 Services.UserService.CreateOrder(book, localStorage.getItem('email'), date)
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
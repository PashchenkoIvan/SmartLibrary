import { useState, useEffect, useContext, } from 'react'
import Popup from 'reactjs-popup';

import { RequestsContext } from '../../../../index';

import s from '../Cabinet.module.css';
import sp from '../../../../assets/styles/popUp.module.css';
import f from '../../../../assets/styles/form.module.css';

const subFormTableRowAdd = ({subs, setSubs}, title, name, isChecked = true) => {
    return (
        <div className={s.subFormTableRow}>
            <div className={s.subFormTableCell}>
                {title}
            </div>
            <div className={s.subFormTableCell}>
                <input
                    type='radio'
                    value='1'
                    name={name}
                    onChange={e =>
                        setSubs({
                            ...subs,
                            [`${name}`]: e.target.value,
                        })
                    }
                />
            </div>
            <div className={s.subFormTableCell}>
                <input
                    type='radio'
                    value='2'
                    name={name}
                    onChange={e =>
                        setSubs({
                            ...subs,
                            [`${name}`]: e.target.value,
                        })
                    }
                />
            </div>
        </div>
    )
}

const MySubcribesPopUp = props => {
    const Requests = useContext(RequestsContext);
    const [categories, setCategories] = useState({
        // 12 макетных категорий
        categories: ['', '', '', '', '', '', '', '', '', '', '', ''],
        isLoading: true,
    });

    const subs = props.subs;
    const setSubs = props.setSubs;

    useEffect(() => {
		Requests.BookRequests.GetBooksCategories().then(res => {
			console.log(res.data);
			const categories = res.data;
			setCategories({categories: categories, isLoading: false})
		})
	}, [Requests]);

    return(
        <div>
            <div className={s.subFormTable}>
                <div className={`${s.subFormTableRow} ${s.tableHeaderRow}`}>
                    <div className={s.subFormTableCell}>
                        Категорія
                    </div>
                    <div className={s.subFormTableCell}>
                        Особистий кабінет
                    </div>
                    <div className={s.subFormTableCell}>
                        E-mail та особистий кабінет
                    </div>
                </div>
                {subFormTableRowAdd({subs, setSubs}, "Новини", "news")}
                {subFormTableRowAdd({subs, setSubs}, "Повідомлення про наявність книги", "notification")}
            </div>
            <div className={`${s.formFullWCell} ${s.tableHeaderRow}`}>
                Нові надходження
            </div>
            <div className={s.subFormTable}>
                {categories.categories.map(c => (subFormTableRowAdd({subs, setSubs}, c.title, c.id)))}
            </div>
        </div>
    )
}

const Popups = () => {
    const [state, setState] = useState({
		email: 'email@test.ua',
		code: ''
	});
    const [subs, setSubs] = useState({
		news: '',
		notification: ''
	});

    return(
        <>
            <Popup
                trigger={
                    <button>Редагувати пароль</button>
                }
                modal
            >
                {close => (
                    <>
                        <div className={sp.header}>
                            <span>Редагувати пароль</span>
                            <button className={sp.closeBtn} onClick={close}>×</button>
                        </div>
                        <div className={sp.content}>
                            <form
                                className={f.form}
                                onSubmit={e => {
                                    e.preventDefault();
                                    console.log(state);
                                    // Promise.resolve(
                                    //     Auth.AuthService.makeLogin({
                                    //         email: state.email,
                                    //         password: state.password,
                                    //     })
                                    // ).then(res => (res !== undefined ? (Auth.status = res ? 'librarian' : 'user') : Auth.status = 'anonym'));
                                }}
                            >
                                <ul className={`${f.fieldsList} + ${sp.fields}`}>
                                    <li className={f.fieldBlock}>
                                        <label>Email</label>
                                        <input
                                            type='email'
                                            value={state.email}
                                            name='email'
                                            onChange={e =>
                                                setState({
                                                    ...state,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </li>
                                    <li className={f.fieldBlock}>
                                        <label>Введіть код з листа</label>
                                        <input
                                            type='password'
                                            value={state.code}
                                            name='code'
                                            onChange={e =>
                                                setState({
                                                    ...state,
                                                    code: e.target.value,
                                                })
                                            }
                                        />
                                    </li>
                                </ul>
                                <div className={f.btns}>
                                    <input
                                        className={f.btn}
                                        type='submit'
                                        value='Далі'
                                        onClick={
                                            () => {
                                                let code = document.querySelector("input[name=\"code\"]")

                                                if (code.value !== "123") {
                                                    alert("Невірний код")
                                                } else { 
                                                    alert("Успіх")
                                                }
                                            }
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                    </>
                )}
            </Popup>
            <Popup
                trigger={
                    <button>Мої підписки</button>
                }
                modal
            >
                {close => (
                    <>
                        <div className={sp.header}>
                            <span>Мої підписки</span>
                            <button className={sp.closeBtn} onClick={close}>×</button>
                        </div>
                        <div className={sp.content}>
                            <form
                                className={f.form}
                                onSubmit={e => {
                                    e.preventDefault();
                                    console.log(subs);
                                    // Promise.resolve(
                                    //     Auth.AuthService.makeLogin({
                                    //         email: state.email,
                                    //         password: state.password,
                                    //     })
                                    // ).then(res => (res !== undefined ? (Auth.status = res ? 'librarian' : 'user') : Auth.status = 'anonym'));
                                }}
                            >
                                <div className={sp.fields}>
                                    <MySubcribesPopUp subs={subs} setSubs={setSubs} />
                                </div>
                                <div className={f.btns}>
                                    <input
                                        className={sp.btn}
                                        type='submit'
                                        value='Зберегти зміни'
                                        onClick={
                                            () => {
                                                console.log('Button Clicked!');
                                            }
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                        
                    </>
                )}
            </Popup>
        </>
    )
}

export default Popups;
import { useState } from "react";

import sp from '../../../../../assets/styles/popUp.module.css';
import f from '../../../../../assets/styles/form.module.css';

const optionMapList = (checkedOption, list = []) => {
    const optionsMapper = list.map(option => {
        if(option.value == checkedOption) {
            return (
		        <option value={option?.value || option?.title} selected>{option?.title || option}</option>
            )
        } else {
            return (
		        <option value={option?.value || option?.title}>{option?.title || option}</option>
            )
        }
    })
	return optionsMapper;
}

const ActivitiesForm = props => {
    const [activity, setActivity] = useState(props.activity);

    return (
        <form
            className={f.form}
            onSubmit={e => {
                e.preventDefault();
                console.log(activity);
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
                    <label>Назва заходу</label>
                    <input
                        type='text'
                        value={activity.name}
                        name='name'
                        onChange={e =>
                            setActivity({
                                ...activity,
                                name: e.target.value,
                            })
                        }
                    />
                </li>
                <li className={f.fieldBlock}>
                    <label>Короткий опис заходу</label>
                    <input
                        type='text'
                        value={activity.smallDescription}
                        name='smallDescription'
                        onChange={e =>
                            setActivity({
                                ...activity,
                                smallDescription: e.target.value,
                            })
                        }
                    />
                </li>
                <li className={f.fieldBlock}>
                    <label>Повний опис заходу</label>
                    <textarea
                        name='bigDescription'
                        onChange={e =>
                            setActivity({
                                ...activity,
                                bigDescription: e.target.value,
                            })
                        }
                    >
                        {activity.bigDescription}
                    </textarea>
                </li>
                <li className={f.fieldBlock}>
                    <label>Категорія</label>
                    <select
                        name='category'
                        onChange={e => 
                            setActivity({
                                ...activity,
                                category: e.target.value,
                            })
                        }>
                        <option value=''>Оберіть категорію</option>
                        {optionMapList(activity.category, [{value: 'Новини ОТГ', title: 'Новини ОТГ'}, {value: 'Новини бібліотеки', title: 'Новини бібліотеки'}, {value: 'Заходи', title: 'Заходи'}])}
                    </select>
                </li>
                <li className={f.fieldBlock}>
                    <label>Дата та час заходу</label>
                    <input
                        type='datetime-local'
                        value={activity.dateTime}
                        name='dateTime'
                        onChange={e =>
                            setActivity({
                                ...activity,
                                dateTime: e.target.value,
                            })
                        }
                    />
                </li>
            </ul>
            <div className={f.btns}>
                <input
                    className={f.btn}
                    type='submit'
                    value='Зберегти'
                    onClick={
                        () =>
                            console.log('Button Clicked!')
                        }
                />
            </div>
        </form>
    )
}

export default ActivitiesForm;
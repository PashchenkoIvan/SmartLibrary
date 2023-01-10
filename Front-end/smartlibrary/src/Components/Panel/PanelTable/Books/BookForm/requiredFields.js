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

export const requiredFields = (state, setState, categories) => {
    return (
        <ul className={f.fieldsList}>
            <li className={f.fieldBlock}>
                <label>Назва</label>
                <input
                    type='text'
                    value={state.title}
                    name='title'
                    onChange={e =>
                        setState({
                            ...state,
                            title: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Інвентарний номер</label>
                <input
                    type='number'
                    value={state.inventory_num}
                    name='inventory_num'
                    onChange={e =>
                        setState({
                            ...state,
                            inventory_num: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Автор(-и) книги</label>
                <input
                    type='text'
                    value={state.author}
                    name='author'
                    onChange={e =>
                        setState({
                            ...state,
                            author: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Кількість сторінок</label>
                <input
                    type='number'
                    value={state.number_of_pages}
                    name='number_of_pages'
                    onChange={e =>
                        setState({
                            ...state,
                            number_of_pages: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Видавництво</label>
                <input
                    type='text'
                    value={state.publisher}
                    name='publisher'
                    onChange={e =>
                        setState({
                            ...state,
                            publisher: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>ISBN</label>
                <input
                    type='text'
                    value={state.isbn}
                    name='isbn'
                    onChange={e =>
                        setState({
                            ...state,
                            isbn: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Тип книги</label>
                <select
                    name='book_type'
                    onChange={e => 
                        setState({
                            ...state,
                            book_type: e.target.value,
                        })
                    }>
                    <option value=''>Оберіть тип</option>
                    {optionMapList(state.book_type, [{value: 'D', title: 'Електрона'}, {value: 'P', title: 'Паперова'}])}
                </select>
            </li>
            <li className={f.fieldBlock}>
                <label>Мова</label>
                <input
                    type='text'
                    value={state.language}
                    name='language'
                    onChange={e =>
                        setState({
                            ...state,
                            language: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Обкладинка</label>
                <input
                    type='text'
                    value={state.cover_img_path}
                    name='cover_img_path'
                    onChange={e =>
                        setState({
                            ...state,
                            cover_img_path: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Тип обкладинки</label>
                <select
                    name='cover_type'
                    onChange={e => 
                        setState({
                            ...state,
                            cover_type: e.target.value,
                        })
                    }>
                    <option value=''>Оберіть тип</option>
                    {optionMapList(state.cover_type, [{value: 'S', title: 'М\'яка'}, {value: 'H', title: 'Тверда'}])}
                </select>
            </li>
            <li className={f.fieldBlock}>
                <label>Категорія</label>
                <select
                    name='category'
                    onChange={e => 
                        setState({
                            ...state,
                            category: [`${e.target.value}`],
                        })
                    }>
                    <option value=''>Оберіть категорію</option>
                    {optionMapList(state.category, categories)}
                </select>
            </li>
            <li className={f.fieldBlock}>
                <label>Опис книги</label>
                <textarea
                    name='description'
                    onChange={e =>
                        setState({
                            ...state,
                            description: e.target.value,
                        })
                    }
                >
                    {state.description}
                </textarea>
            </li>
            <li className={f.fieldBlock}>
                <label>Кількість днів на прочитання</label>
                <input
                    type='number'
                    value={state.time_to_read}
                    name='time_to_read'
                    onChange={e =>
                        setState({
                            ...state,
                            time_to_read: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Дата видавництва</label>
                <input
                    type='date'
                    value={state.publication_date}
                    name='publication_date'
                    onChange={e =>
                        setState({
                            ...state,
                            publication_date: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Рік видавництва</label>
                <input
                    type='number'
                    value={state.publication_year}
                    name='publication_year'
                    onChange={e =>
                        setState({
                            ...state,
                            publication_year: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Місто видавництва</label>
                <input
                    type='text'
                    value={state.city_of_publishing}
                    name='city_of_publishing'
                    onChange={e =>
                        setState({
                            ...state,
                            city_of_publishing: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>УБК шифр</label>
                <input
                    type='number'
                    value={state.ubk}
                    name='ubk'
                    onChange={e =>
                        setState({
                            ...state,
                            ubk: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Тип</label>
                <select
                    name='additional_type'
                    onChange={e => 
                        setState({
                            ...state,
                            additional_type: e.target.value,
                        })
                    }>
                    <option value=''>Оберіть тип</option>
                    {optionMapList(state.additional_type, [{value: 'B', title: 'Книга'}, {value: 'J', title: 'Журнал'}, {value: 'N', title: 'Газета'}])}
                </select>
            </li>
            <li className={f.fieldBlock}>
                <label>Тип видання</label>
                <select
                    name='publication_type'
                    onChange={e => 
                        setState({
                            ...state,
                            publication_type: e.target.value,
                        })
                    }>
                    <option value=''>Оберіть тип</option>
                    {optionMapList(state.publication_type, [{value: 'Period', title: 'Періодичні видання'}, {value: 'Books', title: 'Книги'}, {value: 'Dgtl', title: 'Цифрові видання'}, {value: 'Map', title: 'Карта'}])}
                </select>
            </li>
        </ul>
    )
}
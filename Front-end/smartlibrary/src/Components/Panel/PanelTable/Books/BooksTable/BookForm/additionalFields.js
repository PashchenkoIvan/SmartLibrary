import f from '../../../../../../assets/styles/form.module.css';

const optionMapList = (checkedCategory, list = []) => {
    const optionsMapper = list.map(option => {
        if(option.title == checkedCategory) {
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

export const additionalFields = (state, setState) => {
    return (
        <ul className={f.fieldsList}>
            <li className={f.fieldBlock}>
                <label>Тип документа</label>
                <input
                    type='text'
                    value={state.document_type}
                    name='document_type'
                    onChange={e =>
                        setState({
                            ...state,
                            document_type: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Бібліографічний рівень документа</label>
                <input
                    type='text'
                    value={state.bibliografic_document_level}
                    name='bibliografic_document_level'
                    onChange={e =>
                        setState({
                            ...state,
                            bibliografic_document_level: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Дата ввода документа</label>
                <input
                    type='text'
                    value={state.document_entry_date}
                    name='document_entry_date'
                    onChange={e =>
                        setState({
                            ...state,
                            document_entry_date: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Тип даты публикации</label>
                <input
                    type='text'
                    value={state.pubication_date_type}
                    name='pubication_date_type'
                    onChange={e =>
                        setState({
                            ...state,
                            pubication_date_type: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Коды наличия типов иллюстраций</label>
                <input
                    type='text'
                    value={state.illustration_type_availability_codes}
                    name='illustration_type_availability_codes'
                    onChange={e =>
                        setState({
                            ...state,
                            illustration_type_availability_codes: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код возрастной ориентации</label>
                <input
                    type='text'
                    value={state.age_orientation_code}
                    name='age_orientation_code'
                    onChange={e =>
                        setState({
                            ...state,
                            age_orientation_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код типа материала</label>
                <input
                    type='text'
                    value={state.material_type_code}
                    name='material_type_code'
                    onChange={e =>
                        setState({
                            ...state,
                            material_type_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Коды типа документа</label>
                <input
                    type='text'
                    value={state.document_type_codes}
                    name='document_type_codes'
                    onChange={e =>
                        setState({
                            ...state,
                            document_type_codes: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Статус правительственной публикаций</label>
                <input
                    type='text'
                    value={state.government_publication_status}
                    name='government_publication_status'
                    onChange={e =>
                        setState({
                            ...state,
                            government_publication_status: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Признак публикации конференции</label>
                <input
                    type='text'
                    value={state.is_conference_publishing}
                    name='is_conference_publishing'
                    onChange={e =>
                        setState({
                            ...state,
                            is_conference_publishing: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Признак юбилейного издания</label>
                <input
                    type='text'
                    value={state.is_jubilee}
                    name='is_jubilee'
                    onChange={e =>
                        setState({
                            ...state,
                            is_jubilee: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Ознака наявності покажчиків</label>
                <input
                    type='text'
                    value={state.is_pointers}
                    name='is_pointers'
                    onChange={e =>
                        setState({
                            ...state,
                            is_pointers: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Main entry?</label>
                <input
                    type='text'
                    value={state.is_main_entry}
                    name='is_main_entry'
                    onChange={e =>
                        setState({
                            ...state,
                            is_main_entry: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Ознака мистецтв. літератури</label>
                <input
                    type='text'
                    value={state.is_arts_literature}
                    name='is_arts_literature'
                    onChange={e =>
                        setState({
                            ...state,
                            is_arts_literature: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код типу біографії</label>
                <input
                    type='text'
                    value={state.biografy_type_code}
                    name='biografy_type_code'
                    onChange={e =>
                        setState({
                            ...state,
                            biografy_type_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код мови документа</label>
                <input
                    type='text'
                    value={state.document_lang_code}
                    name='document_lang_code'
                    onChange={e =>
                        setState({
                            ...state,
                            document_lang_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код організації, яка створила запис</label>
                <input
                    type='text'
                    value={state.organization_that_created_rec_code}
                    name='organization_that_created_rec_code'
                    onChange={e =>
                        setState({
                            ...state,
                            organization_that_created_rec_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Ціна</label>
                <input
                    type='text'
                    value={state.price}
                    name='price'
                    onChange={e =>
                        setState({
                            ...state,
                            price: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Помилковий ISBN</label>
                <input
                    type='text'
                    value={state.invalid_isbn}
                    name='invalid_isbn'
                    onChange={e =>
                        setState({
                            ...state,
                            invalid_isbn: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код бібліотеки, створеного запису</label>
                <input
                    type='text'
                    value={state.library_code}
                    name='library_code'
                    onChange={e =>
                        setState({
                            ...state,
                            library_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код мови каталогізації</label>
                <input
                    type='text'
                    value={state.catalization_lang_code}
                    name='catalization_lang_code'
                    onChange={e =>
                        setState({
                            ...state,
                            catalization_lang_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Відповідальний</label>
                <input
                    type='text'
                    value={state.responsible}
                    name='responsible'
                    onChange={e =>
                        setState({
                            ...state,
                            responsible: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Переклад</label>
                <input
                    type='text'
                    value={state.translation}
                    name='translation'
                    onChange={e =>
                        setState({
                            ...state,
                            translation: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код мови тексту</label>
                <input
                    type='text'
                    value={state.text_lang_code}
                    name='text_lang_code'
                    onChange={e =>
                        setState({
                            ...state,
                            text_lang_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код мови передмови</label>
                <input
                    type='text'
                    value={state.preface_lang_code}
                    name='preface_lang_code'
                    onChange={e =>
                        setState({
                            ...state,
                            preface_lang_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код мови змісту</label>
                <input
                    type='text'
                    value={state.context_lang_code}
                    name='context_lang_code'
                    onChange={e =>
                        setState({
                            ...state,
                            context_lang_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код мови оригіналу</label>
                <input
                    type='text'
                    value={state.original_lang_code}
                    name='original_lang_code'
                    onChange={e =>
                        setState({
                            ...state,
                            original_lang_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код країни</label>
                <input
                    type='text'
                    value={state.country_code}
                    name='country_code'
                    onChange={e =>
                        setState({
                            ...state,
                            country_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Iндекс УДК</label>
                <input
                    type='text'
                    value={state.udk_index}
                    name='udk_index'
                    onChange={e =>
                        setState({
                            ...state,
                            udk_index: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>УДК</label>
                <input
                    type='text'
                    value={state.udk}
                    name='udk'
                    onChange={e =>
                        setState({
                            ...state,
                            udk: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Джерело класифікації</label>
                <input
                    type='text'
                    value={state.classification_source}
                    name='classification_source'
                    onChange={e =>
                        setState({
                            ...state,
                            classification_source: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Поличний шифр</label>
                <input
                    type='text'
                    value={state.shelf_cipher}
                    name='shelf_cipher'
                    onChange={e =>
                        setState({
                            ...state,
                            shelf_cipher: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Національний код бібліотеки</label>
                <input
                    type='text'
                    value={state.national_library_code}
                    name='national_library_code'
                    onChange={e =>
                        setState({
                            ...state,
                            national_library_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Кат. індекси</label>
                <input
                    type='text'
                    value={state.category_indexes}
                    name='category_indexes'
                    onChange={e =>
                        setState({
                            ...state,
                            category_indexes: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Сигла зберігання</label>
                <input
                    type='text'
                    value={state.storage_symbol}
                    name='storage_symbol'
                    onChange={e =>
                        setState({
                            ...state,
                            storage_symbol: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Фоpмат</label>
                <input
                    type='text'
                    value={state.book_format}
                    name='book_format'
                    onChange={e =>
                        setState({
                            ...state,
                            book_format: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Номер фонду</label>
                <input
                    type='text'
                    value={state.fond_number}
                    name='fond_number'
                    onChange={e =>
                        setState({
                            ...state,
                            fond_number: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Авторський знак</label>
                <input
                    type='text'
                    value={state.copyright_sign}
                    name='copyright_sign'
                    onChange={e =>
                        setState({
                            ...state,
                            copyright_sign: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Індекси / коди</label>
                <input
                    type='text'
                    value={state.indexes}
                    name='indexes'
                    onChange={e =>
                        setState({
                            ...state,
                            indexes: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Індекс ББК</label>
                <input
                    type='text'
                    value={state.indexes_bbk}
                    name='indexes_bbk'
                    onChange={e =>
                        setState({
                            ...state,
                            indexes_bbk: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Джерело класифікації</label>
                <input
                    type='text'
                    value={state.rank}
                    name='rank'
                    onChange={e =>
                        setState({
                            ...state,
                            rank: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Організація / юрисдикція</label>
                <input
                    type='text'
                    value={state.organisation}
                    name='organisation'
                    onChange={e =>
                        setState({
                            ...state,
                            organisation: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Підпорядкована одиниця</label>
                <input
                    type='text'
                    value={state.subordinate_unit}
                    name='subordinate_unit'
                    onChange={e =>
                        setState({
                            ...state,
                            subordinate_unit: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Номер організації</label>
                <input
                    type='text'
                    value={state.section_number}
                    name='section_number'
                    onChange={e =>
                        setState({
                            ...state,
                            section_number: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Уніфікований заголовок</label>
                <input
                    type='text'
                    value={state.unified_title}
                    name='unified_title'
                    onChange={e =>
                        setState({
                            ...state,
                            unified_title: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Iндикатор</label>
                <input
                    type='text'
                    value={state.indicator}
                    name='indicator'
                    onChange={e =>
                        setState({
                            ...state,
                            indicator: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Незначущі символи</label>
                <input
                    type='text'
                    value={state.minor_characters}
                    name='minor_characters'
                    onChange={e =>
                        setState({
                            ...state,
                            minor_characters: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Переклад назви</label>
                <input
                    type='text'
                    value={state.title_translation}
                    name='title_translation'
                    onChange={e =>
                        setState({
                            ...state,
                            title_translation: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Продовження назви</label>
                <input
                    type='text'
                    value={state.title_continuation}
                    name='title_continuation'
                    onChange={e =>
                        setState({
                            ...state,
                            title_continuation: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Відповідальність</label>
                <input
                    type='text'
                    value={state.responsibility}
                    name='responsibility'
                    onChange={e =>
                        setState({
                            ...state,
                            responsibility: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Тип запису / Звукозапис</label>
                <input
                    type='text'
                    value={state.recording_type}
                    name='recording_type'
                    onChange={e =>
                        setState({
                            ...state,
                            recording_type: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Паралельна назва</label>
                <input
                    type='text'
                    value={state.parllel_title}
                    name='parllel_title'
                    onChange={e =>
                        setState({
                            ...state,
                            parllel_title: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Тип заголовку</label>
                <input
                    type='text'
                    value={state.header_types}
                    name='header_types'
                    onChange={e =>
                        setState({
                            ...state,
                            header_types: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Основний заголовок</label>
                <input
                    type='text'
                    value={state.main_header}
                    name='main_header'
                    onChange={e =>
                        setState({
                            ...state,
                            main_header: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Осн. Відомості про видання</label>
                <input
                    type='text'
                    value={state.main_publication_info}
                    name='main_publication_info'
                    onChange={e =>
                        setState({
                            ...state,
                            main_publication_info: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Доп. Відомості про видання</label>
                <input
                    type='text'
                    value={state.additional_publication_info}
                    name='additional_publication_info'
                    onChange={e =>
                        setState({
                            ...state,
                            additional_publication_info: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Місце видання</label>
                <input
                    type='text'
                    value={state.publication_city}
                    name='publication_city'
                    onChange={e =>
                        setState({
                            ...state,
                            publication_city: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Дата видання</label>
                <input
                    type='text'
                    value={state.publish_date}
                    name='publish_date'
                    onChange={e =>
                        setState({
                            ...state,
                            publish_date: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Обсяг</label>
                <input
                    type='text'
                    value={state.amount}
                    name='amount'
                    onChange={e =>
                        setState({
                            ...state,
                            amount: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Іл. / Тип воспроизв</label>
                <input
                    type='text'
                    value={state.playback_type}
                    name='playback_type'
                    onChange={e =>
                        setState({
                            ...state,
                            playback_type: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Формат</label>
                <input
                    type='text'
                    value={state.another_format}
                    name='another_format'
                    onChange={e =>
                        setState({
                            ...state,
                            another_format: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Сопров. матер.</label>
                <input
                    type='text'
                    value={state.additional_materials}
                    name='additional_materials'
                    onChange={e =>
                        setState({
                            ...state,
                            additional_materials: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Серія</label>
                <input
                    type='text'
                    value={state.serial}
                    name='serial'
                    onChange={e =>
                        setState({
                            ...state,
                            serial: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Номер частини</label>
                <input
                    type='text'
                    value={state.part_section_number}
                    name='part_section_number'
                    onChange={e =>
                        setState({
                            ...state,
                            part_section_number: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Назва частини</label>
                <input
                    type='text'
                    value={state.part_section_title}
                    name='part_section_title'
                    onChange={e =>
                        setState({
                            ...state,
                            part_section_title: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>№ томи, номера</label>
                <input
                    type='text'
                    value={state.number_volumes}
                    name='number_volumes'
                    onChange={e =>
                        setState({
                            ...state,
                            number_volumes: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>ISSN</label>
                <input
                    type='text'
                    value={state.issn}
                    name='issn'
                    onChange={e =>
                        setState({
                            ...state,
                            issn: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Формат. зміст</label>
                <input
                    type='text'
                    value={state.content_format}
                    name='content_format'
                    onChange={e =>
                        setState({
                            ...state,
                            content_format: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Примітки про посилання</label>
                <input
                    type='text'
                    value={state.reference_notes}
                    name='reference_notes'
                    onChange={e =>
                        setState({
                            ...state,
                            reference_notes: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Анотація</label>
                <input
                    type='text'
                    value={state.annotation}
                    name='annotation'
                    onChange={e =>
                        setState({
                            ...state,
                            annotation: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Прим. про целев. призначення</label>
                <input
                    type='text'
                    value={state.destination_note}
                    name='destination_note'
                    onChange={e =>
                        setState({
                            ...state,
                            destination_note: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Рівень</label>
                <input
                    type='text'
                    value={state.level}
                    name='level'
                    onChange={e =>
                        setState({
                            ...state,
                            level: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Рубрикатор</label>
                <input
                    type='text'
                    value={state.rubricator}
                    name='rubricator'
                    onChange={e =>
                        setState({
                            ...state,
                            rubricator: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Основна рубр</label>
                <input
                    type='text'
                    value={state.main_heading}
                    name='main_heading'
                    onChange={e =>
                        setState({
                            ...state,
                            main_heading: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Осн. подрубр</label>
                <input
                    type='text'
                    value={state.main_subheading}
                    name='main_subheading'
                    onChange={e =>
                        setState({
                            ...state,
                            main_subheading: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Місце друкування</label>
                <input
                    type='text'
                    value={state.place_of_printing}
                    name='place_of_printing'
                    onChange={e =>
                        setState({
                            ...state,
                            place_of_printing: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Бібліографія</label>
                <input
                    type='text'
                    value={state.bibliografic}
                    name='bibliografic'
                    onChange={e =>
                        setState({
                            ...state,
                            bibliografic: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Хронол. подрубр</label>
                <input
                    type='text'
                    value={state.hronological_subheading}
                    name='hronological_subheading'
                    onChange={e =>
                        setState({
                            ...state,
                            hronological_subheading: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Гео. подрубр.</label>
                <input
                    type='text'
                    value={state.geografical_subheading}
                    name='geografical_subheading'
                    onChange={e =>
                        setState({
                            ...state,
                            geografical_subheading: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Ключові слова</label>
                <input
                    type='text'
                    value={state.keywoards}
                    name='keywoards'
                    onChange={e =>
                        setState({
                            ...state,
                            keywoards: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Iнші автори</label>
                <input
                    type='text'
                    value={state.other_authors}
                    name='other_authors'
                    onChange={e =>
                        setState({
                            ...state,
                            other_authors: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Династичний номер</label>
                <input
                    type='text'
                    value={state.dynastic_number}
                    name='dynastic_number'
                    onChange={e =>
                        setState({
                            ...state,
                            dynastic_number: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Код авторського ставлення</label>
                <input
                    type='text'
                    value={state.author_attitude_code}
                    name='author_attitude_code'
                    onChange={e =>
                        setState({
                            ...state,
                            author_attitude_code: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Iнші організації</label>
                <input
                    type='text'
                    value={state.other_organisations}
                    name='other_organisations'
                    onChange={e =>
                        setState({
                            ...state,
                            other_organisations: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Iнші заходи</label>
                <input
                    type='text'
                    value={state.other_measures}
                    name='other_measures'
                    onChange={e =>
                        setState({
                            ...state,
                            other_measures: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Місцезнаходження</label>
                <input
                    type='text'
                    value={state.location}
                    name='location'
                    onChange={e =>
                        setState({
                            ...state,
                            location: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Фонд</label>
                <input
                    type='text'
                    value={state.fund}
                    name='fund'
                    onChange={e =>
                        setState({
                            ...state,
                            fund: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Спосіб (тип) доступу</label>
                <input
                    type='text'
                    value={state.access_method}
                    name='access_method'
                    onChange={e =>
                        setState({
                            ...state,
                            access_method: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Ім'я сервера (HostName)</label>
                <input
                    type='text'
                    value={state.host_name}
                    name='host_name'
                    onChange={e =>
                        setState({
                            ...state,
                            host_name: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Місцезнаходження сервера</label>
                <input
                    type='text'
                    value={state.server_location}
                    name='server_location'
                    onChange={e =>
                        setState({
                            ...state,
                            server_location: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Персоналія</label>
                <input
                    type='text'
                    value={state.personnel}
                    name='personnel'
                    onChange={e =>
                        setState({
                            ...state,
                            personnel: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Коди країни</label>
                <input
                    type='text'
                    value={state.country_codes}
                    name='country_codes'
                    onChange={e =>
                        setState({
                            ...state,
                            country_codes: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Спонсори</label>
                <input
                    type='text'
                    value={state.sponsors}
                    name='sponsors'
                    onChange={e =>
                        setState({
                            ...state,
                            sponsors: e.target.value,
                        })
                    }
                />
            </li>
            <li className={f.fieldBlock}>
                <label>Категорія книг</label>
                <input
                    type='text'
                    value={state.book_category}
                    name='book_category'
                    onChange={e =>
                        setState({
                            ...state,
                            book_category: e.target.value,
                        })
                    }
                />
            </li>
        </ul>
    )
}
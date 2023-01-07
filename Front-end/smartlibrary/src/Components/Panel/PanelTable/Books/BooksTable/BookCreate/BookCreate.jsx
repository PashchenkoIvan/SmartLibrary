import { useState } from 'react';
import { Link } from 'react-router-dom';

import BookForm from '../BookForm/BookForm';

import s from './bookCreate.module.css';

const BookCreate = props => {
	props.setHeader(false);
	const [state, setState] = useState(
		{
			title: '',
			inventory_num: '',
			author: '',
			number_of_page: '',
			publisher: '',
			isbn: '',
			book_type: '',
			language: '',
			cover_img_path: '',
			cover_type: '',
			category: '',
			description: '',
			time_to_read: '',
			piblication_date: '',
			publication_year: '',
			city_of_publishing: '',
			ubk: '',
			additional_type: '',
			publication_type: '',

			// Додаткові поля
			document_type: '',
			bibliografic_document_level: '',
			document_entry_date: '',
			pubication_date_type: '',
			illustration_type_availability_codes: '',
			age_orientation_code: '',
			material_type_code: '',
			document_type_codes: '',
			government_publication_status: '',
			is_conference_publishing: '',
			is_jubilee: '',
			is_pointers: '',
			is_main_entry: '',
			is_arts_literature: '',
			biografy_type_code: '',
			document_lang_code: '',
			organization_that_created_rec_code: '',
			price: '',
			invalid_isbn: '',
			library_code: '',
			catalization_lang_code: '',
			responsible: '',
			translation: '',
			text_lang_code: '',
			preface_lang_code: '',
			context_lang_code: '',
			original_lang_code: '',
			country_code: '',
			udk_index: '',
			udk: '',
			classification_source: '',
			shelf_cipher: '',
			national_library_code: '',
			category_indexes: '',
			storage_symbol: '',
			book_format: '',
			fond_number: '',
			copyright_sign: '',
			indexes: '',
			indexes_bbk: '',
			rank: '',
			organisation: '',
			subordinate_unit: '',
			section_number: '',
			unified_title: '',
			indicator: '',
			minor_characters: '',
			title_translation: '',
			title_continuation: '',
			responsibility: '',
			recording_type: '',
			parllel_title: '',
			header_types: '',
			main_header: '',
			main_publication_info: '',
			additional_publication_info: '',
			publication_city: '',
			publish_date: '',
			amount: '',
			playback_type: '',
			another_format: '',
			additional_materials: '',
			serial: '',
			part_section_number: '',
			part_section_title: '',
			number_volumes: '',
			issn: '',
			content_format: '',
			reference_notes: '',
			annotation: '',
			destination_note: '',
			level: '',
			rubricator: '',
			main_heading: '',
			main_subheading: '',
			place_of_printing: '',
			bibliografic: '',
			hronological_subheading: '',
			geografical_subheading: '',
			keywoards: '',
			other_authors: '',
			dynastic_number: '',
			author_attitude_code: '',
			other_organisations: '',
			other_measures: '',
			location: '',
			fund: '',
			access_method: '',
			host_name: '',
			server_location: '',
			personnel: '',
			country_codes: '',
			sponsors: '',
			book_category: '',
		}
	)

	return (
		<div className={s.container}>
			<Link to='/admin/books' className={s.btn}>
				До каталогу книжок
			</Link>
			<div className={s.contentBlock}>
				<h2 className={s.caption}>Додавання нової книги</h2>
				<div className={s.topBar}>
					<button className={s.addBook}>Додати по URL</button>
					<button className={s.addBook}>Пошук в Google</button>
					<button className={s.addBook}>Пошук по штриху</button>
					<input
						className={s.inputCodeField}
						type='text'
						placeholder='Введіть штрих код книги'
					/>
				</div>
				<BookForm book={state} isEditing='false' />
			</div>
		</div>
	);
};

export default BookCreate;

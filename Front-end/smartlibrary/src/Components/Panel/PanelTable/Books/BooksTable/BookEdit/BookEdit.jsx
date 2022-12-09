import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import s from './bookEdit.module.css';

const BookEdit = props => {
	props.setHeader(false);
	const [isHidden, setIsHidden] = useState(true);
	useEffect(() => {}, [isHidden]);

	const { currentBookId } = useParams();
	const [books, setBooks] = useState(props.data.books);

	const singleFieldCreator = (label, type, value, name) => {
		const typeChecker = () => {
			if (type === 'text' || type === 'number') {
				return (
					<>
						<label>{label}</label>
						<input type={type} value={value} name={name} />
					</>
				);
			} else if (type === 'select') {
				return (
					<>
						<label>{label}</label>
						<select>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
					</>
				);
			} else if (type === 'textarea') {
				return (
					<>
						<label>{label}</label>
						<textarea name={name}>{value}</textarea>
					</>
				);
			} else {
			}
		};
		return <li className={s.singleFieldBlock}>{typeChecker()}</li>;
	};

	const showMainFieldsList = b => {
		return (
			<ul className={s.mainFieldsList}>
				{singleFieldCreator('Назва', 'text', b.bookName, 'bookName')}
				{singleFieldCreator(
					'Інвентарний номер',
					'text',
					b.inventoryNumber,
					'inventoryNumber'
				)}
				{singleFieldCreator(
					'Автор(-и) книги',
					'text',
					b.bookAuthor,
					'bookAuthor'
				)}
				{singleFieldCreator(
					'Кількість сторінок',
					'text',
					b.pageAmount,
					'pageAmount'
				)}
				{singleFieldCreator('Видавництво', 'text', b.publisher, 'publisher')}
				{singleFieldCreator('ISBN', 'text', b.ISBN, 'ISBN')}
				{singleFieldCreator('Тип книги', 'text', b.bookType, 'bookType')}
				{singleFieldCreator('Мова', 'text', b.lang, 'lang')}
				{singleFieldCreator('Обкладинка', 'text', b.bookImg, 'bookImg')}
				{singleFieldCreator('Категорія', 'select', b.bookName, 'bookName')}
				{singleFieldCreator('Опис книги', 'textarea', b.bookDesc, 'bookDesc')}
				{singleFieldCreator(
					'Кількість днів на прочитання',
					'number',
					b.rentDay,
					'rentDay'
				)}
				{singleFieldCreator(
					'Дата видавництва',
					'text',
					b.dateOfPublication,
					'dateOfPublication'
				)}
				{singleFieldCreator(
					'Місто видавництва',
					'text',
					b.publisherLocation,
					'publisherLocation'
				)}
				{singleFieldCreator(
					'Номер видання',
					'text',
					b.publisherNumber,
					'publisherNumber'
				)}
				{singleFieldCreator('УБК шифр', 'text', b.UBK, 'UBK')}
				{singleFieldCreator('Тип', 'select', b.bookName, 'bookName')}
				{singleFieldCreator('Тип видання', 'select', b.bookName, 'bookName')}
			</ul>
		);
	};

	const showAdditionalFieldsList = b => {
		if (!isHidden) {
			return (
				<ul className={s.additionalFieldsList} id='additionalFieldsList'>
					{singleFieldCreator(
						'Тип документа',
						'text',
						b.documentType,
						'documentType'
					)}
					{singleFieldCreator(
						'Бібліографічний рівень документа',
						'text',
						b.bibliographicLevel,
						'bibliographicLevel'
					)}
					{singleFieldCreator(
						'Дата ввода документа',
						'text',
						b.documentEntryDate,
						'documentEntryDate'
					)}
					{singleFieldCreator(
						'Тип даты публикации',
						'text',
						b.publicationDateType,
						'publicationDateType'
					)}
					{singleFieldCreator(
						'Коды наличия типов иллюстраций',
						'text',
						b.illustrationTypeAvailabilityCodes,
						'illustrationTypeAvailabilityCodes'
					)}
					{singleFieldCreator(
						'Код возрастной ориентации',
						'text',
						b.ageOrientationCode,
						'ageOrientationCode'
					)}
					{singleFieldCreator(
						'Код типа материала',
						'text',
						b.materialTypeCode,
						'materialTypeCode'
					)}
					{singleFieldCreator(
						'Коды типа документа',
						'text',
						b.documentTypeCodes,
						'documentTypeCodes'
					)}
					{singleFieldCreator(
						'Статус правительственной публикаций',
						'text',
						b.statusOfGovernmentPublications,
						'statusOfGovernmentPublications'
					)}
					{singleFieldCreator(
						'Признак публикации конференции',
						'text',
						b.conferencePublishingFlag,
						'conferencePublishingFlag'
					)}
					{singleFieldCreator(
						'Признак юбилейного издания',
						'text',
						b.anniversaryEditionSign,
						'anniversaryEditionSign'
					)}
					{singleFieldCreator(
						'Ознака наявності покажчиків',
						'text',
						b.signOfPresenceOfIndicators,
						'signOfPresenceOfIndicators'
					)}
					{singleFieldCreator('Main entry?', 'text', b.mainEntry, 'mainEntry')}
					{singleFieldCreator(
						'Ознака мистецтв. літератури',
						'text',
						b.mysticSign_Literature,
						'mysticSign_Literature'
					)}
					{singleFieldCreator(
						'Код типу біографії',
						'text',
						b.biographyTypeCode,
						'biographyTypeCode'
					)}
					{singleFieldCreator(
						'Код мови документа',
						'text',
						b.movieDocumentCode,
						'movieDocumentCode'
					)}
					{singleFieldCreator(
						'Код організації, яка створила запис',
						'text',
						b.organizationCodeThatMadeTheEntry,
						'organizationCodeThatMadeTheEntry'
					)}
					{singleFieldCreator('Ціна', 'text', b.price, 'price')}
					{singleFieldCreator(
						'Помилковий ISBN',
						'text',
						b.invalidISBN,
						'invalidISBN'
					)}
					{singleFieldCreator(
						'Код бібліотеки, створеного запису',
						'text',
						b.theLibraryCodeThatCreatedTheEntry,
						'theLibraryCodeThatCreatedTheEntry'
					)}
					{singleFieldCreator(
						'Код мови каталогізації',
						'text',
						b.catalogingLanguageCode,
						'catalogingLanguageCode'
					)}
					{singleFieldCreator(
						'Відповідальний',
						'text',
						b.responsible,
						'responsible'
					)}
					{singleFieldCreator('Переклад', 'text', b.translation, 'translation')}
					{singleFieldCreator(
						'Код мови тексту',
						'text',
						b.textLanguageCode,
						'textLanguageCode'
					)}
					{singleFieldCreator(
						'Код мови передмови',
						'text',
						b.prefaceLanguageCode,
						'prefaceLanguageCode'
					)}
					{singleFieldCreator(
						'Код мови змісту',
						'text',
						b.contentLanguageCode,
						'contentLanguageCode'
					)}
					{singleFieldCreator(
						'Код мови оригіналу',
						'text',
						b.originalLanguageCode,
						'originalLanguageCode'
					)}
					{singleFieldCreator(
						'Код країни',
						'text',
						b.countryCode,
						'countryCode'
					)}
					{singleFieldCreator('Iндекс УДК', 'text', b.UDCIndex, 'UDCIndex')}
					{singleFieldCreator('УДК', 'text', b.UDC, 'UDC')}
					{singleFieldCreator(
						'Джерело класифікації',
						'text',
						b.classificationSource,
						'classificationSource'
					)}
					{singleFieldCreator(
						'Поличний шифр',
						'text',
						b.shelfCipher,
						'shelfCipher'
					)}
					{singleFieldCreator(
						'Національний код бібліотеки',
						'text',
						b.nationalLibraryCode,
						'nationalLibraryCode'
					)}
					{singleFieldCreator(
						'Кат. індекси',
						'text',
						b.cut_Indices,
						'cut_Indices'
					)}
					{singleFieldCreator(
						'Сигла зберігання',
						'text',
						b.storageSymbol,
						'storageSymbol'
					)}
					{singleFieldCreator('Фоpмат', 'text', b.format, 'format')}
					{singleFieldCreator(
						'Номер фонду',
						'text',
						b.fundNumber,
						'fundNumber'
					)}
					{singleFieldCreator(
						'Авторський знак',
						'text',
						b.copyrightSign,
						'copyrightSign'
					)}
					{singleFieldCreator(
						'Індекси / коди',
						'text',
						b.indexesOrCodes,
						'indexesOrCodes'
					)}
					{singleFieldCreator('Індекс ББК', 'text', b.BBKIndex, 'BBKIndex')}
					{singleFieldCreator(
						'Джерело класифікації',
						'text',
						b.classificationSource,
						'classificationSource'
					)}
					{singleFieldCreator(
						'Династичний номер',
						'text',
						b.dynasticNumber,
						'dynasticNumber'
					)}
					{singleFieldCreator('Титул (звання)', 'text', b.title, 'title')}
					{singleFieldCreator(
						'Організація / юрисдикція',
						'text',
						b.organizationOrJurisdiction,
						'organizationOrJurisdiction'
					)}
					{singleFieldCreator(
						'Підпорядкована одиниця',
						'text',
						b.subordinateUnit,
						'subordinateUnit'
					)}
					{singleFieldCreator(
						'Номер організації',
						'text',
						b.organizationNumber,
						'organizationNumber'
					)}
					{singleFieldCreator(
						'Місце заходу',
						'text',
						b.placeOfEvent,
						'placeOfEvent'
					)}
					{singleFieldCreator('Дата заходу', 'text', b.eventDate, 'eventDate')}
					{singleFieldCreator(
						'Соподчиненная одиниця',
						'text',
						b.subordinateUnit,
						'subordinateUnit'
					)}
					{singleFieldCreator(
						'№ частини / секції',
						'text',
						b.partOrSectionNo,
						'partOrSectionNo'
					)}
					{singleFieldCreator(
						'Уніфікований заголовок',
						'text',
						b.unifiedHeader,
						'unifiedHeader'
					)}
					{singleFieldCreator('Iндикатор', 'text', b.indicator, 'indicator')}
					{singleFieldCreator(
						'Незначущі символи',
						'text',
						b.minorCharacters,
						'minorCharacters'
					)}
					{singleFieldCreator(
						'№ частини / розділу',
						'text',
						b.partOrSectionNo2,
						'partOrSectionNo2'
					)}
					{singleFieldCreator(
						'Назва частини / розділу',
						'text',
						b.nameOfPartOrSection,
						'nameOfPartOrSection'
					)}
					{singleFieldCreator(
						'Переклад назви',
						'text',
						b.translationOfTheTitle,
						'translationOfTheTitle'
					)}
					{singleFieldCreator('Назва', 'text', b.name, 'name')}
					{singleFieldCreator(
						'Продовження назви',
						'text',
						b.continuationOfTheTitle,
						'continuationOfTheTitle'
					)}
					{singleFieldCreator(
						'Відповідальність',
						'text',
						b.responsibility,
						'responsibility'
					)}
					{singleFieldCreator('Дати твори', 'text', b.giveWorks, 'giveWorks')}
					{singleFieldCreator(
						'Тип запису / Звукозапис',
						'text',
						b.recordingTypeOrSoundRecording,
						'recordingTypeOrSoundRecording'
					)}
					{singleFieldCreator(
						'Паралельна назва',
						'text',
						b.parallelName,
						'parallelName'
					)}
					{singleFieldCreator(
						'Тип заголовку',
						'text',
						b.headerType,
						'headerType'
					)}
					{singleFieldCreator(
						'Основний заголовок',
						'text',
						b.mainTitle,
						'mainTitle'
					)}
					{singleFieldCreator(
						'Осн. Відомості про видання',
						'text',
						b.mainPublicationInformation,
						'mainPublicationInformation'
					)}
					{singleFieldCreator(
						'Доп. Відомості про видання',
						'text',
						b.additionalPublicationInformation,
						'additionalPublicationInformation'
					)}
					{singleFieldCreator(
						'Місце видання',
						'text',
						b.placeOfPublication,
						'placeOfPublication'
					)}
					{singleFieldCreator(
						'Видавництво',
						'text',
						b.publishingHouse,
						'publishingHouse'
					)}
					{singleFieldCreator(
						'Дата видання',
						'text',
						b.publicationDate,
						'publicationDate'
					)}
					{singleFieldCreator('Обсяг', 'text', b.amount, 'amount')}
					{singleFieldCreator(
						'Іл. / Тип воспроизв',
						'text',
						b.ill_OrPlaybackType,
						'ill_OrPlaybackType'
					)}
					{singleFieldCreator('Формат', 'text', b.format, 'format')}
					{singleFieldCreator(
						'Сопров. матер.',
						'text',
						b.accompanyingMaterial,
						'accompanyingMaterial'
					)}
					{singleFieldCreator('Серія', 'text', b.series, 'series')}
					{singleFieldCreator(
						'Номер частини',
						'text',
						b.partNumber,
						'partNumber'
					)}
					{singleFieldCreator(
						'Назва частини',
						'text',
						b.nameOfThePart,
						'nameOfThePart'
					)}
					{singleFieldCreator(
						'№ томи, номера',
						'text',
						b.noVolumesNumbers,
						'noVolumesNumbers'
					)}
					{singleFieldCreator('ISSN', 'text', b.ISSN, 'ISSN')}
					{singleFieldCreator(
						'Тип прямуючи.',
						'text',
						b.typeHeading,
						'typeHeading'
					)}
					{singleFieldCreator(
						'Формат. зміст',
						'text',
						b.format_Content,
						'format_Content'
					)}
					{singleFieldCreator(
						'Примітки про посилання',
						'text',
						b.referenceNotes,
						'referenceNotes'
					)}
					{singleFieldCreator('Анотація', 'text', b.annotation, 'annotation')}
					{singleFieldCreator(
						'Прим. про целев. призначення',
						'text',
						b.approx_AboutTheTargetAppointment,
						'approx_AboutTheTargetAppointment'
					)}
					{singleFieldCreator('Рівень', 'text', b.level, 'level')}
					{singleFieldCreator('Рубрикатор', 'text', b.rubricator, 'rubricator')}
					{singleFieldCreator(
						'Основна рубр',
						'text',
						b.mainRubric,
						'mainRubric'
					)}
					{singleFieldCreator(
						'Осн. подрубр',
						'text',
						b.mainSubrubric,
						'mainSubrubric'
					)}
					{singleFieldCreator(
						'Місце друкування',
						'text',
						b.placeOfPrinting,
						'placeOfPrinting'
					)}
					{singleFieldCreator(
						'Бібліографія',
						'text',
						b.bibliography,
						'bibliography'
					)}
					{singleFieldCreator(
						'Хронол. подрубр',
						'text',
						b.сhronologyOfSubrubric,
						'сhronologyOfSubrubric'
					)}
					{singleFieldCreator(
						'Гео. подрубр.',
						'text',
						b.geo_Subrubric,
						'geo_Subrubric'
					)}
					{singleFieldCreator('Ключові слова', 'text', b.keywords, 'keywords')}
					{singleFieldCreator(
						'Iнші автори',
						'text',
						b.otherAuthors,
						'otherAuthors'
					)}
					{singleFieldCreator(
						'Династичний номер',
						'text',
						b.dynasticNumber2,
						'dynasticNumber2'
					)}
					{singleFieldCreator(
						'Код авторського ставлення',
						'text',
						b.authorAttitudeCode,
						'authorAttitudeCode'
					)}
					{singleFieldCreator(
						'Iнші організації',
						'text',
						b.otherOrganizations,
						'otherOrganizations'
					)}
					{singleFieldCreator(
						'Iнші заходи',
						'text',
						b.otherMeasures,
						'otherMeasures'
					)}
					{singleFieldCreator(
						'Місцезнаходження',
						'text',
						b.location,
						'location'
					)}
					{singleFieldCreator('Фонд', 'text', b.fund, 'fund')}
					{singleFieldCreator(
						'Авторський знак',
						'text',
						b.copyrightSign2,
						'copyrightSign2'
					)}
					{singleFieldCreator(
						'Поличний шифр',
						'text',
						b.shelfCipher2,
						'shelfCipher2'
					)}
					{singleFieldCreator(
						'Спосіб (тип) доступу',
						'text',
						b.methodOfAccess,
						'methodOfAccess'
					)}
					{singleFieldCreator(
						"Ім'я сервера (HostName)",
						'text',
						b.hostName,
						'hostName'
					)}
					{singleFieldCreator(
						'Місцезнаходження сервера',
						'text',
						b.serverLocation,
						'serverLocation'
					)}
					{singleFieldCreator('Персоналія', 'text', b.personnel, 'personnel')}
					{singleFieldCreator(
						'Коди країни',
						'text',
						b.countryCodes,
						'countryCodes'
					)}
					{singleFieldCreator('Спонсори', 'text', b.sponsors, 'sponsors')}
					{singleFieldCreator(
						'Категорія книг',
						'text',
						b.booksCategory,
						'booksCategory'
					)}
				</ul>
			);
		} else {
		}
	};

	const formMap = books.map(b =>
		b.id === currentBookId ? (
			<div className={s.contentBlock}>
				<h2 className={s.caption}>Редагування книги «{b.bookName}»</h2>
				<form className={s.form}>
					{showMainFieldsList(b)}
					<div
						className={s.additionalFieldsBtn}
						onClick={() => setIsHidden(!isHidden)}
					>
						Додаткові поля
					</div>
					{showAdditionalFieldsList(b)}
					<input type='submit' className={s.submitBtn} value='Зберегти зміни' />
				</form>
			</div>
		) : (
			''
		)
	);

	return (
		<div className={s.container}>
			<Link to='/admin/books' className={s.btn}>
				До каталогу книжок
			</Link>
			{formMap}
		</div>
	);
};

export default BookEdit;

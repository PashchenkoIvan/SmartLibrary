const mainFieldsData = b => {
	return (
		[
			{
				label: "Назва",
				type: "text",
				value: b.bookName,
				name: "bookName",
			},
			{
				label: "Інвентарний номер",
				type: "text",
				value: b.inventoryNumber,
				name: "inventoryNumber",
			},
			{
				label: "Автор(-и) книги",
				type: "text",
				value: b.bookAuthor,
				name: "bookAuthor",
			},
			{
				label: "Кількість сторінок",
				type: "text",
				value: b.pageAmount,
				name: "pageAmount",
			},
			{
				label: "Видавництво",
				type: "text",
				value: b.publisher,
				name: "publisher",
			},
			{
				label: "ISBN",
				type: "text",
				value: b.ISBN,
				name: "ISBN",
			},
			{
				label: "Тип книги",
				type: "text",
				value: b.bookType,
				name: "bookType",
			},
			{
				label: "Мова",
				type: "text",
				value: b.lang,
				name: "lang",
			},
			{
				label: "Обкладинка",
				type: "text",
				value: b.bookImg,
				name: "bookImg",
			},
			{
				label: "Категорія",
				type: "select",
				value: b.bookCategory,
				name: "bookCategory",
			},
			{
				label: "Опис книги",
				type: "textarea",
				value: b.bookDesc,
				name: "bookDesc",
			},
			{
				label: "Кількість днів на прочитання",
				type: "number",
				value: b.rentDay,
				name: "rentDay",
			},
			{
				label: "Дата видавництва",
				type: "text",
				value: b.dateOfPublication,
				name: "dateOfPublication",
			},
			{
				label: "Місто видавництва",
				type: "text",
				value: b.publisherLocation,
				name: "publisherLocation",
			},
			{
				label: "Номер видання",
				type: "text",
				value: b.publisherNumber,
				name: "publisherNumber",
			},
			{
				label: "УБК шифр",
				type: "text",
				value: b.UBK,
				name: "UBK",
			},
			{
				label: "Тип",
				type: "select",
				value: b.type,
				name: "type",
			},
			{
				label: "Тип видання",
				type: "select",
				value: b.publicationType,
				name: "publicationType",
			},
		]
	);
};

export default mainFieldsData;
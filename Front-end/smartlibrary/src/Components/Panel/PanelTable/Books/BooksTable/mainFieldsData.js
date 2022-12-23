const mainFieldsData = b => {
	return (
		[
			{
				label: "Назва",
				type: "text",
				value: b.title,
				name: "title",
			},
			{
				label: "Інвентарний номер",
				type: "number",
				value: b.inventory_num,
				name: "inventory_num",
			},
			{
				label: "Автор(-и) книги",
				type: "text",
				value: b.author,
				name: "author",
			},
			{
				label: "Кількість сторінок",
				type: "number",
				value: b.number_of_pages,
				name: "number_of_pages",
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
				value: b.isbn,
				name: "isbn",
			},
			{
				label: "Тип книги",
				type: "text",
				value: b.book_type,
				name: "book_type",
			},
			{
				label: "Мова",
				type: "text",
				value: b.language,
				name: "language",
			},
			{
				label: "Обкладинка",
				type: "text",
				value: b.cover_img_path,
				name: "cover_img_path",
			},
			{
				label: "Тип обкладинки",
				type: "text",
				value: "H",
				name: "cover_type",
			},
			{
				label: "Категорія",
				type: "select",
				value: b.category,
				name: "category",
			},
			{
				label: "Опис книги",
				type: "textarea",
				value: b.description,
				name: "description",
			},
			{
				label: "Кількість днів на прочитання",
				type: "number",
				value: b.time_to_read,
				name: "time_to_read",
			},
			{
				label: "Дата видавництва",
				type: "number",
				value: b.piblication_date,
				name: "piblication_date",
			},
			{
				label: "Рік видавництва",
				type: "number",
				value: b.piblication_year,
				name: "piblication_year",
			},
			{
				label: "Місто видавництва",
				type: "text",
				value: b.city_of_publishing,
				name: "city_of_publishing",
			},
			{
				label: "УБК шифр",
				type: "number",
				value: b.ubk,
				name: "ubk",
			},
			{
				label: "Тип",
				type: "text",
				value: b.additional_type,
				name: "additional_type",
			},
			{
				label: "Тип видання",
				type: "text",
				value: b.publication_type,
				name: "publication_type",
			},
		]
	);
};

export default mainFieldsData;
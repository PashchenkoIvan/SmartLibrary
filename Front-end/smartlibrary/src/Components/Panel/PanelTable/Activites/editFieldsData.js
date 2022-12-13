const editFieldsData = a => {
	return (
		[
			{
				label: "Назва заходу",
				type: "text",
				value: a.name,
				name: "name",
			},
			{
				label: "Короткий опис заходу",
				type: "text",
				value: a.smallDescription,
				name: "smallDescription",
			},
			{
				label: "Повний опис заходу",
				type: "textarea",
				value: a.bigDescription,
				name: "bigDescription",
			},
			{
				label: "Категорія",
				type: "select",
				value: a.category,
				name: "category",
			},
			{
				label: "Дата та час заходу",
				type: "datetime-local",
				value: a.dateTime,
				name: "dateTime",
			}
		]
	);
};

export default editFieldsData;
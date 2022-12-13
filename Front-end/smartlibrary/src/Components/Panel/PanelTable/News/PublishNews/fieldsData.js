const fieldsData = n => [
	{
		label: 'Новини',
		type: 'text',
		value: n.name,
		name: 'name',
	},
	{
		label: 'Опис',
		type: 'text',
		value: n.description,
		name: 'description',
	},
	{
		label: 'Дата події',
		type: 'date',
		value: n.date,
		name: 'date',
	},
];

export default fieldsData;

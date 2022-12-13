const fieldsData = r => [
	{
		label: 'Назва репорту',
		type: 'text',
		value: r.name,
		name: 'name',
	},
	{
		label: 'Дата с',
		type: 'date',
		value: r.dateFrom,
		name: 'dateFrom',
	},
	{
		label: 'Дата по',
		type: 'date',
		value: r.dateTo,
		name: 'dateTo',
	},
];

export default fieldsData;

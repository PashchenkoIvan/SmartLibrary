const fieldsData = e => [
	{
		label: 'Мета, читацьке призначення',
		type: 'text',
		value: e.target,
		name: 'target',
	},
	{
		label: 'Кількість присутніх',
		type: 'number',
		value: e.attends,
		name: 'attends',
	},
	{
		label: 'Використання технічних засобів',
		type: 'text',
		value: e.techUse,
		name: 'techUse',
	},
	{
		label: 'Ефективність',
		type: 'text',
		value: e.efficiency,
		name: 'efficiency',
	},
	{
		label: 'Форма роботи',
		type: 'text',
		value: e.formOfWork,
		name: 'formOfWork',
	},
	{
		label: 'Відповідальні за захід',
		type: 'text',
		value: e.responsibles,
		name: 'responsibles',
	},
	{
		label: 'Висновки бібліотекаря',
		type: 'text',
		value: e.conclusions,
		name: 'conclusions',
	},
	{
		label: 'Використаня література',
		type: 'text',
		value: e.usedBooks,
		name: 'usedBooks',
	},
	{
		label: 'Список учасників',
		type: 'text',
		value: e.participants,
		name: 'participants',
	},
];

export default fieldsData;

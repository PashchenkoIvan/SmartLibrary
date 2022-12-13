const fieldsData = r => [
	{
		label: 'Мета, читацьке призначення',
		type: 'text',
		value: r.target,
		name: 'target',
	},
	{
		label: 'Кількість присутніх',
		type: 'number',
		value: r.attends,
		name: 'attends',
	},
	{
		label: 'Використання технічних засобів',
		type: 'text',
		value: r.techUse,
		name: 'techUse',
	},
	{
		label: 'Ефективність',
		type: 'text',
		value: r.efficiency,
		name: 'efficiency',
	},
	{
		label: 'Форма роботи',
		type: 'text',
		value: r.formOfWork,
		name: 'formOfWork',
	},
	{
		label: 'Відповідальні за захід',
		type: 'text',
		value: r.responsibles,
		name: 'responsibles',
	},
	{
		label: 'Висновки бібліотекаря',
		type: 'text',
		value: r.conclusions,
		name: 'conclusions',
	},
	{
		label: 'Використаня література',
		type: 'text',
		value: r.usedBooks,
		name: 'usedBooks',
	},
	{
		label: 'Список учасників',
		type: 'text',
		value: r.participants,
		name: 'participants',
	},
];

export default fieldsData;

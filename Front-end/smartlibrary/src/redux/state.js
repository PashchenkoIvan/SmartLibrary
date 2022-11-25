const ADD_READER = 'ADD-READER';

let state = {
	admin: {
		tables: {
			readers: [
				{
					name: 'Sergey Zorya',
					email: 'sergey.zorya@gmail.com',
					phone: '+380935096324',
					status: 'Немає боргів',
				},
			],
			books: [
				{
					name: '12 Обручів',
					author: 'Юрій Андрухович',
					number: '15140',
					status: 'У наявності',
					id: 23,
				},
				{
					name: 'Избранные сны',
					author: 'Римма Запесоцька',
					number: '14977',
					status: 'У наявності',
					id: 24,
				},
			],
		},
	},
};
export const addReaderActionCreator = () => {
	return{
		type: ADD_READER,
	}
}
export default state;

const ADD_READER = 'ADD-READER';

let state = {
	admin: {
		tables: {
			readers: [
				{
					name: 'Sergey Zorya',
					email: 'sergey.zorya@gmail.com',
					phone: '+380935096324',
					status: false,
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

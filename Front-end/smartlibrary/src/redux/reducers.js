export const StatusReducer = (
	state = { status: 'anonym', loading: true },
	action
) => {
	switch (action.type) {
		case 'SET_STATUS': {
			return { status: action.payload, loading: false };
		}
		default: {
			return state;
		}
	}
};

export const MessageReducer = (
	state = {
		text: '',
		color: '#fff',
		textColor: 'black',
	},
	action
) => {
	switch (action.type) {
		case 'SHOW_MESSAGE': {
			return {
				text: action.payload.text,
				color: action.payload.color,
				textColor: action.payload.textColor,
			};
		}
		default: {
			return state;
		}
	}
};

export const CategoriesReducer = (
	state = {
		categories: [],
		loading: false,
	},
	action
) => {
	switch (action.type) {
		case 'FETCH_CATEGORIES': {
			return {
				categories: [
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
				],
				loading: true,
			};
		}
		case 'FETCH_CATEGORIES_SUCCESS': {
			return {
				categories: action.payload,
				loading: false,
			};
		}
		default: {
			return state;
		}
	}
};

export const BooksReducer = (state = { books: [], loading: false }, action) => {
	switch (action.type) {
		case 'FETCH_BOOKS': {
			return { ...state, loading: true };
		}
		case 'FETCH_BOOKS_SUCCESS': {
			return { books: action.payload, loading: false };
		}
		default: {
			return state;
		}
	}
};

export const ReadersReducer = (
	state = { readers: [], loading: false },
	action
) => {
	switch (action.type) {
		case 'FETCH_READERS': {
			return { ...state, loading: true };
		}
		case 'FETCH_READERS_SUCCESS': {
			return { readers: action.payload, loading: false };
		}
		default: {
			return state;
		}
	}
};

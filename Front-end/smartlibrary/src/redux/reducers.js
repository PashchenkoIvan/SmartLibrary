export const BooksReduser = (state = { books: [], loading: false }, action) => {
	switch (action.type) {
		case 'FETCH_BOOKS': {
			return { books: [], loading: true };
		}
		case 'FETCH_BOOKS_SUCCESS': {
			return { books: action.payload, loading: false };
		}
		case 'RESET_BOOKS': {
			return { books: [], loading: false };
		}
		default: {
			return state;
		}
	}
};

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

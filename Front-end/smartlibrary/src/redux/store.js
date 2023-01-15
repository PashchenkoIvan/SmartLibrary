import { combineReducers, legacy_createStore as createStore } from 'redux';
import { BooksReduser, StatusReducer } from './reducers';

const rootReducer = combineReducers({
	books: BooksReduser,
	status: StatusReducer,
});

export const store = createStore(rootReducer);

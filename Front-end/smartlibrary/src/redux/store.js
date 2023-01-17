import { combineReducers, legacy_createStore as createStore } from 'redux';
import {
	BooksReducer,
	CategoriesReducer,
	MessageReducer,
	ReadersReducer,
	StatusReducer,
} from './reducers';

const rootReducer = combineReducers({
	status: StatusReducer,
	message: MessageReducer,
	categories: CategoriesReducer,
	books: BooksReducer,
	readers: ReadersReducer,
});

export const store = createStore(rootReducer);

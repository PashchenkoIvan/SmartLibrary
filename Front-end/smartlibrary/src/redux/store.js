import { combineReducers, legacy_createStore as createStore } from 'redux';
import {
	BooksReducer,
	CategoriesReducer,
	MessageReducer, OrdersReducer,
	ReadersReducer,
	StatusReducer,
} from './reducers';

const rootReducer = combineReducers({
	status: StatusReducer,
	message: MessageReducer,
	categories: CategoriesReducer,
	books: BooksReducer,
	readers: ReadersReducer,
	orders: OrdersReducer,
});

export const store = createStore(rootReducer);

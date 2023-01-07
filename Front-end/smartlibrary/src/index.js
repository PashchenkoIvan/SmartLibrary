import { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import state from './redux/state';
import App from './App';

import AuthService from './services/AuthService';
import BookService from './services/BookService';
import UserService from './services/UserService';

import './index.css';

let categoriesList = [];

export const ServicesContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ServicesContext.Provider
		value={{ AuthService, BookService, UserService, categoriesList }}
	>
		<BrowserRouter>
			<App state={state} />
		</BrowserRouter>
	</ServicesContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

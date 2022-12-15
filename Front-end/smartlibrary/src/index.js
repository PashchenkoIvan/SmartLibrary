import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import state from './redux/state';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthRequests from './requests/AuthRequests';
import BookRequests from './requests/BookRequests';

const RequestsContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RequestsContext.Provider value={(AuthRequests, BookRequests)}>
		<BrowserRouter>
			<App state={state} />
		</BrowserRouter>
	</RequestsContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

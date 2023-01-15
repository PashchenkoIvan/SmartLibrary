export const FetchBooks = () => ({ type: 'FETCH_BOOKS' });
export const FetchBooksSuccess = data => ({
	type: 'FETCH_BOOKS_SUCCESS',
	payload: data,
});
export const ResetBooks = () => ({ type: 'RESET_BOOKS' });

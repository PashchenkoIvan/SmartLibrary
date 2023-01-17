export const FetchReaders = () => ({ type: 'FETCH_READERS' });
export const FetchReadersSuccess = data => ({
	type: 'FETCH_READERS_SUCCESS',
	payload: data,
});

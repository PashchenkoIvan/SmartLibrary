export const FetchCategories = () => ({ type: 'FETCH_CATEGORIES' });
export const FetchCategoriesSuccess = data => ({
	type: 'FETCH_CATEGORIES_SUCCESS',
	payload: data,
});

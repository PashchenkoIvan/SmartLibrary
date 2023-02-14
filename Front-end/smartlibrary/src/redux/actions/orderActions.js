export const FetchOrders = () => ({ type: 'FETCH_ORDERS' });
export const FetchOrdersSuccess = data => ({
    type: 'FETCH_ORDERS_SUCCESS',
    payload: data,
});
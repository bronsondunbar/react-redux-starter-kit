export const REQUEST_FETCH_DATA = 'REQUEST_FETCH_DATA'
const requestFetchData = () => {
	return { type: REQUEST_FETCH_DATA }
}

export const RECEIVE_FETCH_DATA = 'RECEIVE_FETCH_DATA'
const receiveFetchData = (json) => {
	return { type: RECEIVE_FETCH_DATA, data: json }
}

export const requestData = () => {
	return dispatch => {
		dispatch(requestFetchData())
		fetch ('https://demo.wp-api.org/wp-json/wp/v2/posts')
		.then ((response) => response.json())
		.then(json => dispatch(receiveFetchData(json)))
	}
}

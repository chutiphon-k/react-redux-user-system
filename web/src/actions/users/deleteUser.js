import { CALL_API } from 'redux-api-middleware'

export default (id) => dispatch => dispatch({
	[CALL_API]: {
		endpoint: `${process.env.HOST}/users/${id}`,
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		method: 'DELETE',
		types: [
			'DELETE_USER_REQUEST',
			'DELETE_USER_SUCCESS',
			'DELETE_USER_FAILURE'
	    ]
	}
})
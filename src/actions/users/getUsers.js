import { CALL_API } from 'redux-api-middleware'
// import { push } from 'react-router-redux'

export default () => dispatch => dispatch({
	[CALL_API]: {
		endpoint: `${process.env.HOST}/users`,
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		method: 'GET',
		types: [
			'LOAD_USER_REQUEST',
			'LOAD_USER_SUCCESS',
			'LOAD_USER_FAILURE'
	    ]
	}
})
import { CALL_API } from 'redux-api-middleware'
// import { push } from 'react-router-redux'

export default () => dispatch => dispatch({
	[CALL_API]: {
		endpoint: `https://twisser-5cc2d.firebaseio.com/tweet.json`,
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
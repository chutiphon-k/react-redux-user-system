const initialState = {
	get: {
		isFinish: false,
		status: '',
		data: [],
	}
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'LOAD_USER_REQUEST':
			return {
				...state,
				get: {
					...state.get,
					isFinish: false,
					status: '...Loading'
				}
			}
		case 'LOAD_USER_SUCCESS':
			return {
				...state,
				get: {
					...state.get,
					isFinish: true,
					status: 'Success',
					data: action.payload,
				}
			}
		case 'LOAD_USER_FAILURE':
			return {
				...state,
				get: {
					...state.get,
					isFinish: false,
					status: 'Error'
				}
			}
		default:
			return state
	}
}
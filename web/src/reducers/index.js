import { combineReducers } from 'redux'
import { routerReducer  } from 'react-router-redux'
import users from 'reducers/userReducer'

export default combineReducers({
	routing: routerReducer,
	users
})
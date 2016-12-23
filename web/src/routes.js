import React from 'react'
import {
	Router,
	Route,
	IndexRoute,
	Redirect
} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from 'containers/App'
import About from 'containers/About'
import {
	ListUser,
	AddUser,
	EditUser
} from 'containers/users'

export default (store, history) => (
	<Router history={syncHistoryWithStore(history, store)}>
		<Route path='/' component={App}>
			<IndexRoute component={ListUser} />
			<Route path='user/add' component={AddUser}/>
			<Route path='user/:user_id/edit' component={EditUser}/>
			<Route path='about' component={About} />
			<Redirect from='*' to='/' />
		</Route>
	</Router>
)
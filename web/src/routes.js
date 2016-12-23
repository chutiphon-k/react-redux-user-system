import React from 'react'
import {
	Router,
	Route,
	IndexRoute
} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import {
	App,
	Home,
	About
} from 'containers'

export default (store, history) => (
	<Router history={syncHistoryWithStore(history, store)}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='about' component={About} />
		</Route>
	</Router>
)
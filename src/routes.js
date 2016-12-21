import React from 'react'
import {
	Router,
	Route,
	IndexRoute
} from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
import {
	App,
	Home
} from 'containers'

export default (store, history) => (
	<Router history={history}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
		</Route>
	</Router>
)
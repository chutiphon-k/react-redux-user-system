import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router' 
import actions from 'actions'

const { getUsers } = actions

class Home extends Component {

	state = {
		x: 0
	}

	increaseX(){
		console.log(process.env.HOST)
		this.setState({ x: this.state.x + 1 })
	}

	render(){
		return (
			<div>
				<h1>Home</h1>
				<h1>Hello { this.state.x }</h1>
				<button onClick={this.increaseX.bind(this)}>Click</button>
				<br />
				<button onClick={this.props.AAA}>Users</button>
				<Link to={'about'}>About</Link>
				<br />
				<pre>{ JSON.stringify(this.props.users, null, 2) }</pre>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	users: state.users.get.data
})

const mapDispatchToProps = (dispatch) => ({
  AAA() {
    dispatch(getUsers())
  }
})

Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)

export default Home
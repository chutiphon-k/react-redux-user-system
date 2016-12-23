import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
// import actions from 'actions'

// const { getUsers } = actions

class About extends Component {

	state = {
		x: 0
	}

	increaseX(){
		console.log(process.env.HOST)
		this.setState({ x: this.state.x + 1 })
	}

	componentWillMount(){
		console.log('aaa')
	}

	render(){
		return (
			<div>
				<h1>About</h1>
				<button onClick={this.props.AAA}>Click</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	users: state.users.get.data
})

const mapDispatchToProps = (dispatch) => ({
  AAA() {
    dispatch(push('/'))
  }
})

About = connect(
	mapStateToProps,
	mapDispatchToProps
)(About)

export default About
import React, { Component } from 'react'

export default class Home extends Component {

	state = {
		x: 0
	}

	increaseX(){
		this.setState({ x: this.state.x + 1 })
	}

	render(){
		return (
			<div>
				<h1>Home</h1>
				<h1>Hello { this.state.x }</h1>
				<button onClick={this.increaseX.bind(this)}>Click</button>
			</div>
		)
	}
}
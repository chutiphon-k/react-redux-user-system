import React, { Component } from 'react'

class EditUser extends Component {


	componentWillMount(){
		console.log(this.props.params.user_id)
	}

	render(){
		return (
			<div>
				EditUser
			</div>
		)
	}
}

export default EditUser
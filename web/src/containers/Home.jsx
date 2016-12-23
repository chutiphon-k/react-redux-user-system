import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router' 
import { 
	Table,
	Button,
	Grid,
	Row,
	Col
} from 'react-bootstrap'
import actions from 'actions'

const { getUsers } = actions

class Home extends Component {

	componentWillMount(){
		this.props.getUsers()
	}

	render(){
		return (
			<div>
				<div className="page-header">
				  <h1>User List <Button bsStyle="info">Add</Button></h1>
				</div>
				<br />
				<Table striped bordered condensed hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Description</th>
							<th>Option</th>
						</tr>
					</thead>
				<tbody>
					{
						this.props.users.map((user, index) => {
							const { name, description } = user
							return (
								<tr key={name}>
									<td>{index+1}</td>
									<td>{name}</td>
									<td>{description}</td>
									<td>
										<Button bsStyle="success">Edit</Button>
										{' '}
										<Button bsStyle="danger">Delete</Button>
									</td>
								</tr>
							)
						})
					}
				</tbody>
				</Table>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	users: state.users.get.data
})

const mapDispatchToProps = (dispatch) => ({
	getUsers() {
	    dispatch(getUsers())
	}
})

Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)

export default Home
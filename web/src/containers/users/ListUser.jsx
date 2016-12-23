import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router' 
import { 
	Table,
	Button
} from 'react-bootstrap'
import actions from 'actions'

const { getUsers, deleteUser } = actions

class ListUser extends Component {

	componentWillMount(){
		this.props.getUsers()
	}

	shouldComponentUpdate(nextProps, nextState){
		return nextProps.users !== this.props.users
	}

	render(){
		return (
			<div>
				<div className="page-header">
				  <h1>List User <Link to='user/add'><Button bsStyle="info">Add</Button></Link></h1>
				</div>
				<br />
				<Table striped bordered condensed hover>
					<thead>
						<tr>
							<th>User ID</th>
							<th>Name</th>
							<th>Description</th>
							<th>Option</th>
						</tr>
					</thead>
				<tbody>
					{
						this.props.users.map((user) => {
							const { id, name, description } = user
							return (
								<tr key={name}>
									<td>{id}</td>
									<td>{name}</td>
									<td>{description}</td>
									<td>
										<Link to={`user/${id}/edit`}><Button bsStyle="success">Edit</Button></Link>
										{' '}
										<Button bsStyle="danger" onClick={() => this.props.deleteUser(id)}>Delete</Button>
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
	},
	deleteUser(id) {
		dispatch(deleteUser(id))
	}
})

ListUser = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListUser)

export default ListUser
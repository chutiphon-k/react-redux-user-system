import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { Button } from 'react-bootstrap'
import actions from 'actions'

const { postUser } = actions

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>{' '}
	<input {...input} type={type} /> {' '}
	<span className='error' style={{'color':'red'}}>{touched && ((error && <span>{error}</span>))}</span>
  </div>
)

class AddUser extends Component {

    state = {}

	render(){
		const { handleSubmit, reset, submitting } = this.props

		return (
			<div>
				<div className="page-header">
				  <h1>Add User</h1>
				</div>
			    <form onSubmit={handleSubmit} className='form' action='javascript:void(0)'>
					<Field name="name" component={renderField} type="text" label='Name :'/>
					<Field name="description" component={renderField} type="text" label='Description :'/>
					<div>
				    	<Button type='submit' bsStyle="primary" disabled={submitting}>Submit</Button>
				    	{' '}
				    	<Button type='reset' bsStyle="danger" disabled={submitting} onClick={reset}>Reset</Button>
				    </div>
			    </form>
			</div>
		)
	}
}

const validate = values => {
	const { name, description } = values
	const errors = {}
	if (!name || name.trim() == '') {
    	errors.name = 'Required'
	}

	if (!description || description.trim() == '') {
    	errors.description = 'Required'
	}

	return errors
}

AddUser = reduxForm({
	form: 'adduser',
	validate
})(AddUser)

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  onSubmit(values) {
    dispatch(postUser(values))
  }
})

AddUser = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddUser)

export default AddUser
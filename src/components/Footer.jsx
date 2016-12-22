import React from 'react'
import {
	Nav,
	Navbar,
	NavItem
} from 'react-bootstrap'
import 'components/Footer.css'

const Footer = () => {
	return (
		<div className="footer">
			<strong>Development By</strong>
			<br />
			<img className="logoDev" src="http://donejs.com/static/img/react-logo.png" />	
		</div>
	)
}

export default Footer
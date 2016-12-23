import React from 'react'
import {
	Nav,
	Navbar,
	NavItem
} from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import 'components/Header.css'

const Header = () => {
  return(
		<Navbar inverse collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
					<Link to='/'>React Redux ToDoList</Link>
				</Navbar.Brand>
			</Navbar.Header>
		    <Navbar.Collapse>
		      <Nav pullRight>
					<LinkContainer to='/about'>
						<NavItem eventKey={1}>About</NavItem>
					</LinkContainer>
		        <NavItem eventKey={2}>Contact</NavItem>
		      </Nav>
		    </Navbar.Collapse>
		</Navbar>
    )
}

export default Header
import React from 'react'
import NotConnectedButton from './NotConnectedButton'
import ConnectedButton from './ConnectedButton'

const NavBar = ({connected, onClick, address}) => {
	
	if (!connected) {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<NotConnectedButton onClick={onClick} />
				</div>
			</nav>)
	}
	else {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<ConnectedButton address={address}/>
				</div>
			</nav>)
	}
}

export default NavBar
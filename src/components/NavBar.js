import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import NotConnectedButton from './NotConnectedButton'
import ConnectedButton from './ConnectedButton'

const NavBar = ({connected, onClick, address}) => {
	
	if (!connected) {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<NotConnectedButton onClick={onClick} />
					<button id="github" className="bg-white sticky duration-500 border-0 border-gray-600 fixed w-12 transform hover:-translate-y-3 h-100 text-2xl rounded-full hover:bg-gray-600 hover:text-white text-gray-600" style={{ borderRadius: '50%', width: 30, height:30}}>
						<a href="https://github.com/jocorrei" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
					</button>
				</div>
			</nav>)
	}
	else {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<ConnectedButton address={address}/>
					<button id="github" className="bg-white sticky duration-500 border-0 border-gray-600 fixed w-12 transform hover:-translate-y-3 h-100 text-2xl rounded-full hover:bg-gray-600 hover:text-white text-gray-600" style={{ borderRadius: '50%', width: 30, height:30}}>
						<a href="https://github.com/jocorrei" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
					</button>
				</div>
			</nav>)
	}
}

export default NavBar
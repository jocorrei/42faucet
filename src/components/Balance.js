import React from "react";
import ethLogo from '../ethLogo.png'
const Balance = ({ balance }) => {

	const styledImage = {
		width: 90,
	}


	return (
	<div className="d-flex justify-content-center">
		<div className="card border-primary mb-3 align" style={{ maxWidth : '40rem', marginTop : '5rem'}}>
			<div className="card-header">Pool Balance</div>
			<div className="card-body">
				<div className="container">
				<h4 className="card-title" style={{ fontSize: '100px'}}>{balance}
				<img src={ethLogo} style={styledImage}/>
				</h4>
				</div>
			</div>
			</div>
		</div>
		)
	}

export default Balance
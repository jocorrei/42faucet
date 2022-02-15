import React from "react";
import ethLogo from '../ethLogo.png'
import chainLogo from '../42chaintoken.png'

const Balance = ({ balance, tokenBalance }) => {

	const styledImage = {
		width: 90,
		marginBottom: 10,
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
			<div className="card border-primary mb-3 align" style={{ maxWidth : '40rem', marginTop : '5rem', marginLeft : '5rem'}}>
			<div className="card-header">Tokens Available</div>
			<div className="card-body">
				<div className="container">
				<h4 className="card-title" style={{ fontSize: '100px'}}>{tokenBalance}
				<img src={chainLogo} style={styledImage}/>
				</h4>
				</div>
			</div>
			</div>
		</div>
		)
	}

export default Balance
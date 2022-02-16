import React from "react";
import ethLogo from '../ethLogo.png'
import chainLogo from '../42chaintoken.png'
import MediaQuery from 'react-responsive'

const Balance = ({ balance, tokenBalance }) => {

	const styledImageDesktop = {
		width: 90,
		marginBottom: 10,
	}

	const styledImageMobile = {
		width: 90,
		marginBottom: 10,
	}


	return (
		<div>
		<MediaQuery minWidth={1224}>
		<div className="d-flex justify-content-center">
		<div className="card border-primary mb-3 align" style={{ maxWidth : '40rem', marginTop : '5rem'}}>
			<div className="card-header">Pool Balance</div>
			<div className="card-body">
				<div className="container">
				<h4 className="card-title" style={{ fontSize: '100px'}}>{balance}
				<img src={ethLogo} style={styledImageDesktop}/>
				</h4>
				</div>
			</div>
			</div>
			<div className="card border-primary mb-3 align" style={{ maxWidth : '40rem', marginTop : '5rem', marginLeft : '5rem'}}>
			<div className="card-header">Tokens Available</div>
			<div className="card-body">
				<div className="container">
				<h4 className="card-title" style={{ fontSize: '100px'}}>{tokenBalance}
				<img src={chainLogo} style={styledImageDesktop}/>
				</h4>
				</div>
			</div>
			</div>
		</div>
		</MediaQuery>
		<MediaQuery maxWidth={1224}>
		<div className="d-flex justify-content-center">
			<div className="card border-primary mb-3 align" style={{ maxWidth : '20rem', marginTop : '2rem', minWidth: '20rem'}}>
				<div className="card-header">Pool Balance</div>
				<div className="card-body">
					<div className="container">
						<h4 className="card-title" style={{ fontSize: '80px'}}>{balance}
						<img src={ethLogo} style={styledImageMobile}/></h4>
					</div>
				</div>
			</div>
		</div>
		<div className="d-flex justify-content-center">
			<div className="card border-primary mb-3 align" style={{ maxWidth : '20rem', marginTop : '2rem', minWidth: '20rem'}}>
				<div className="card-header">Tokens Available</div>
				<div className="card-body">
					<div className="container">
						<h4 className="card-title" style={{ fontSize: '80px'}}>{tokenBalance}
						<img src={chainLogo} style={styledImageMobile}/></h4>
					</div>
				</div>
			</div>
		</div>
		</MediaQuery>
		</div>
		)
	}

export default Balance
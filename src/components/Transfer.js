import React from 'react'
import NotConnected from './NotConnected'
import MediaQuery from 'react-responsive'

const Transfer = ({connected, onClick, newAddress, setNewAddress, address, tokenAddress}) => {
	if (!connected) {
		return(
			<NotConnected />
			)	
	} else {
		return (
			<div>
			<MediaQuery minWidth={1224}>
			<div className="d-flex justify-content-center">
			<div className="input-group mb-3" style={{ maxWidth: '40rem', marginTop: 60}}>
			<input type="text" 
				className="form-control" 
				placeholder="Recipient's address"
				value={newAddress}
				aria-label="Recipient's username" 
				aria-describedby="button-addon2"
				onChange={({target}) => setNewAddress (target.value)}/>
			<button className="btn btn-primary" type="button" id="button-addon2" onClick={onClick}>Send</button>
		  </div>
		  </div>
		  <div className="text-center p-4">
			  Make sure you are connected to your localhost
       	 </div>
			<div className="text-center p-4">
			  Contract Address:  {address}
			</div>
			<div className="text-center p-4">
			  Token	Address:  {tokenAddress}
			</div>
			</MediaQuery>
			<MediaQuery maxWidth={1224}>
			<div className="d-flex justify-content-center">
			<div className="input-group mb-3" style={{ maxWidth: '40rem', marginTop: 30}}>
			<input type="text" 
				className="form-control" 
				placeholder="Recipient's address"
				value={newAddress}
				aria-label="Recipient's username" 
				aria-describedby="button-addon2"
				onChange={({target}) => setNewAddress (target.value)}/>
			<button className="btn btn-primary" type="button" id="button-addon2" onClick={onClick}>Send</button>
		  </div>
		  </div>
			</MediaQuery>
		  </div>
		)
	}
}

export default Transfer
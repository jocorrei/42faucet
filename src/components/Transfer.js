import React from 'react'
import NotConnected from './NotConnected'

const Transfer = ({connected, onClick, newAddress, setNewAddress}) => {
	if (!connected) {
		return(
			<NotConnected />
			)	
	} else {
		return (
			<div>
			<div className="d-flex justify-content-center">
			<div className="input-group mb-3" style={{ maxWidth: '40rem', marginTop: 20}}>
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
		  <div className="text-center p-4" style={{}}>
			  Make sure you are connected to the Ropstein Testnet
        </div>
		  </div>
		)
	}
}

export default Transfer
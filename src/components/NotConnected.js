import React from 'react'

const NotConnected = () => {
	const Style = {
		maxWidth: '40rem',
	}
	return (
		<div className="d-flex justify-content-center">
		<div className="card text-white bg-info mb-3" style={ {maxWidth: '40rem', marginTop: 50} }>
			<div className="card-header" style={Style}>Connect to your metamask to send money</div>
		</div>
		</div>
	)
}

export default NotConnected
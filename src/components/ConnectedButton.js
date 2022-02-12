import React from 'react'

const ConnectedButton = ({ address }) => {
	return (
		<div>
			<button type="button" className="btn btn-light btn-lg">Connected: { address }</button>
		</div>
	)
}

export default ConnectedButton
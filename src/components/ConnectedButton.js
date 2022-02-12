import React from 'react'

const ConnectedButton = ({ address }) => {
	return (
		<div>
			<button type="button" className="btn btn-light btn-lg">{ address }</button>
		</div>
	)
}

export default ConnectedButton
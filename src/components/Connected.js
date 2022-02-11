import React from 'react'

const Connected = ({ adress, onClick }) => {
	console.log(adress, 'here');
	if (adress) {
		return(
			<div>Connected with { adress }</div>
		)
	} else
	return(
		<div>
			<button onClick={onClick}>Connect</button>
		</div>
	)
}

export default Connected
import React from "react";

const NotConnectedButton = ({ onClick }) => {
	return (
		<button type="button" className="btn btn-light btn-lg" onClick={onClick}>Connect Wallet</button>
	)
}

export default NotConnectedButton
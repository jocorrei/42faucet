import React from 'react'

const Footer = () => {
	return (
		<footer className="text-center text-lg-start bg-light text-muted" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', }}>
            © 2022 Copyright:
            <a className="text-reset fw-bold"> 42Chains </a>
        </div>
        </footer>
	)
}

export default Footer
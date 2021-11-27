import { useState } from 'react'

const Layout = ({ children, global, pageContext }) => {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			{children}
		</div>
	)
}

export default Layout

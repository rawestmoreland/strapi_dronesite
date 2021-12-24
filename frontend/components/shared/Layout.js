import { useState } from 'react'
import NavBar from '../blocks/NavBar'
import Footer from '../blocks/Footer'

const Layout = ({ children, global, pageContext }) => {
	const { navbar } = global
	return (
		<>
			<NavBar navbar={navbar} pageContext={pageContext} />
			<div className='flex flex-col justify-between'>{children}</div>
			{/* {footer && <Footer footer={footer} />} */}
		</>
	)
}

export default Layout

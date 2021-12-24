import Link from 'next/link'
import NavLink from '../shared/NavLink'
import { MdClose } from 'react-icons/md'

const MobileMenu = ({ navbar, onClose }) => {
	const { title, links } = navbar
	return (
		<div className='fixed top-0 left-0 h-screen w-screen bg-white'>
			<div className='container h-full flex flex-col justify between'>
				{/* Top Row */}
				<div className='flex flex-row justify-between items-center py-2 px-1'>
					<div className='flex items-center justify-center'>
						<Link href='/'>
							<a className='font-bold md:text-lg tracking-wide'>
								{title}
							</a>
						</Link>
					</div>
					<button onClick={onClose} className='p1'>
						<MdClose className='h-8 w-auto' />
					</button>
				</div>
				{/* Links */}
				{links.length > 0 && (
					<ul className='flex items-center justify-center w-full h-full flex-col tracking-wide'>
						{links.map((link) => (
							<li className='text-center py-2' key={link.id}>
								<NavLink text={link.text} url={link.url} />
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default MobileMenu

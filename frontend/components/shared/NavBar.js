import NavLink from './NavLink';
import Link from 'next/link';

const NavBar = () => {
	return (
		<nav className='relative sticky top-0 flex items-center justify-center w-screen h-16 px-6 bg-shadow-of-light z-50'>
			<div className='flex align-center justify-center w-full justify-between font-poppins'>
				<logo>
					<Link href='/'>
						<a className='font-bold text-xl'>
							The Houston Drone Guy
						</a>
					</Link>
				</logo>
				<div>
					<ul>
						<NavLink text='Home' url='/' />
						<NavLink text='Our Work' url='/portfolio' />
						<NavLink text='Contact Us' url='/contact' />
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

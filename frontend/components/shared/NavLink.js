import Link from 'next/link';

export default function NavLink({ text, url, newTab }) {
	return (
		<Link href={url}>
			<a className='mx-4 hover:text-gray-500'>{text}</a>
		</Link>
	);
}

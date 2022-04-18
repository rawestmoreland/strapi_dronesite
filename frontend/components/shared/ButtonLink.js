import PropTypes from 'prop-types'
import Link from 'next/link'
import classNames from 'classnames'

export default function ButtonLink({ text, variant, type, url, size }) {
	return (
		<div
			className={`flex items-center justify-center p-1 text-sm md:text-lg ${
				variant === 'rounded' ? 'rounded' : ''
			} 
			${
				type === 'outlined'
					? 'border-2 border-lighter-blue bg-transparent text-shadow-of-light'
					: 'border-2 border-lighter-blue bg-lighter-blue text-shadow-of-light'
			} 
			${
				size === 'small'
					? 'h-8 w-16'
					: size === 'medium'
					? 'h-12 w-24'
					: size === 'fit'
					? 'h-fit w-fit px-2 py-2'
					: 'h-16 w-32'
			}`}
		>
			<Link className='flex items-center justify-center' href={url}>
				{text}
			</Link>
		</div>
	)
}

ButtonLink.defaultProps = {
	size: 'fit',
	variant: 'rectangular',
	type: 'filled',
	url: '#',
}

ButtonLink.propTypes = {
	text: PropTypes.string,
	variant: PropTypes.oneOf(['rounded', 'rectangular']),
	type: PropTypes.oneOf(['outlined', 'filled']),
	size: PropTypes.oneOf(['small', 'medium', 'large', 'fit']),
}

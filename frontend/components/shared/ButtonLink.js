import PropTypes from 'prop-types'
import Link from 'next/link'

export default function ButtonLink({
	text,
	variant,
	type,
	url,
	size,
	backgroundColor,
	textColor,
}) {
	return (
		// TODO: Maybe merge this with the Button component.
		<div
			className={`flex items-center justify-center p-1 text-sm md:text-lg ${
				variant === 'rounded' ? 'rounded' : ''
			} ${
				type === 'outlined'
					? 'border border-' +
					  backgroundColor +
					  ' bg-transparent text-shadow-of-light'
					: 'border border-' +
					  backgroundColor +
					  ' bg-' +
					  backgroundColor +
					  ' text-' +
					  textColor
			} ${
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
	textColor: 'shadow-of-light',
	variant: 'rectangular',
	type: 'filled',
	url: '#',
	backgroundColor: 'lighter-blue',
}

ButtonLink.propTypes = {
	text: PropTypes.string,
	variant: PropTypes.oneOf(['rounded', 'rectangular']),
	type: PropTypes.oneOf(['outlined', 'filled']),
	size: PropTypes.oneOf(['small', 'medium', 'large', 'fit']),
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
}

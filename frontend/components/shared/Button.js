import PropTypes from 'prop-types'

export default function Button({
	text,
	disabled,
	variant,
	type,
	size,
	backgroundColor,
	textColor,
	onClick,
}) {
	return (
		<button
			onClick={onClick}
			className={`${variant === 'rectangular' ? 'rounded' : ''} ${
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
					: 'h-16 w-32'
			}`}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

Button.defaultProps = {
	disabled: false,
	textColor: 'shadow-of-light',
	variant: 'rectangular',
	type: 'filled',
	backgroundColor: 'light-blue',
}

Button.propTypes = {
	text: PropTypes.string,
	disabled: PropTypes.bool,
	variant: PropTypes.oneOf(['rounded', 'rectangular']),
	type: PropTypes.oneOf(['outlined', 'filled']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	onClick: PropTypes.func.isRequired,
}

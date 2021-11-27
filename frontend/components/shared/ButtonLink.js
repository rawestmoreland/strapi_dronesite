import PropTypes from 'prop-types';

export default function Button({
	text,
	disabled,
	variant,
	type,
	backgroundColor,
	textColor,
	onClick,
}) {
	return (
		// TODO: Maybe merge this with the Button component.
		<div
			className={`${variant === 'rectangular' ? 'rounded' : ''} ${
				type === outlined
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
		>
			<Link href={url}>{text}</Link>
		</div>
	);
}

Button.defaultProps = {
	textColor: 'shadow-of-light',
	variant: 'rectangular',
	type: 'filled',
	backgroundColor: 'light-blue',
};

Button.propTypes = {
	text: PropTypes.string,
	variant: PropTypes.oneOf(['rounded', 'rectangular']),
	type: PropTypes.oneOf(['outlined', 'filled']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
};

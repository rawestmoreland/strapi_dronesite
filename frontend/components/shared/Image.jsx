import Image from 'next/image'
import PropTypes from 'prop-types'
import { getStrapiMedia } from '../../utils/api-helpers'
import { mediaPropTypes } from '../../utils/types'

const NextImage = ({ media, ...props }) => {
	const { url, alternativeText } = media

	const loader = ({ src }) => {
		return getStrapiMedia(src)
	}

	if (props.width && props.height) {
		return (
			<Image
				loader={loader}
				src={url}
				alt={alternativeText || ''}
				{...props}
			/>
		)
	}

	return (
		<Image
			loader={loader}
			layout='responsive'
			width={media.width}
			height={media.height}
			objectFit='contain'
			src={url}
			alt={alternativeText || ''}
		/>
	)
}

Image.propTypes = {
	media: mediaPropTypes,
	className: PropTypes.string,
}

export default NextImage

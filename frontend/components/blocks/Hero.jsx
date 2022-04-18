import { getStrapiMedia } from '../../utils'
import ButtonLink from '../shared/ButtonLink'

const Hero = ({ picture, title, label, CTAButton }) => {
	return (
		<div className='relative left-0 flex items-center justify-center w-full font-poppins'>
			<div className='absolute top-0 left-0 right-0 h-full w-full bg-black opacity-30'></div>
			<img
				className='w-full'
				src={getStrapiMedia(picture.url)}
				alt={picture.alternativeText}
			/>
			<div className='flex items-center justify-center text-center flex-col text-white absolute'>
				<h1 className='font-bold tracking-wider text-2xl md:text-7xl md:font-base md:mb-4'>
					{title}
				</h1>
				<h2
					className='font-base tracking-wider text-base md:text-2xl my-2 md:mb-4 px-4
				'
				>
					{label}
				</h2>
				{CTAButton && (
					<ButtonLink
						text={CTAButton.text}
						variant={CTAButton.variant}
						type={CTAButton.type}
						size={CTAButton.size}
						url={`${CTAButton.url ? CTAButton.url : '#'}`}
					/>
				)}
			</div>
		</div>
	)
}

Hero.defaultProps = {}

export default Hero

import NavLink from '../shared/NavLink'
import NextImage from '../shared/Image'
import classNames from 'classnames'

const FeatureRowsGroup = ({ FeatureRow }) => {
	return (
		<div className='container flex flex-col gap-12 py-12 font-poppins'>
			{FeatureRow.map((row, index) => {
				const { title, description, link, media, anchorid } = row
				return (
					<div
						id={`${anchorid ? anchorid : ''}`}
						className={classNames(
							'flex flex-col justify-start md:justify-between md:items-center gap-10 scroll-mt-16',
							{
								'lg:flex-row': index % 2 === 0,
								'lg:flex-row-reverse': index % 2 === 1,
							}
						)}
						key={row.id}
					>
						<div className='w-full'>
							<h2 className='text-2xl text-dark-blue font-bold'>
								{title}
							</h2>
							{description && (
								<p className='text-md my-6'>{description}</p>
							)}
							{link && link.url && (
								<NavLink link={link}>
									<div className='flex flex-row items-center text-lighter-blue with-arrow hover:underline'>
										{link.text}
									</div>
								</NavLink>
							)}
						</div>
						<div className='w-full sm:9/12 h-auto max-h-full'>
							<div className='block w-full h-auto'>
								<NextImage media={media}></NextImage>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default FeatureRowsGroup

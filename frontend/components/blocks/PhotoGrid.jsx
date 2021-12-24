import NextImage from '../shared/Image'

const PhotoGrid = ({ photos }) => {
	return (
		<div className='grid md:grid-cols-2 gap-8 p-12 w-full'>
			{photos.map((p, index) => {
				const { photo } = p
				return <NextImage key={index} media={photo} />
			})}
		</div>
	)
}

export default PhotoGrid

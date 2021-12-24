import Hero from '../blocks/Hero'
import FeatureRowsGroup from '../blocks/FeatureRowsGroup'
import PhotoGrid from '../blocks/PhotoGrid'

const getBlockComponent = ({ __component, ...rest }, index) => {
	let Block
	console.log(__component)

	switch (__component) {
		case 'blocks.hero':
			Block = Hero
			break
		case 'blocks.feature-rows-group':
			Block = FeatureRowsGroup
			break
		case 'blocks.photogrid':
			Block = PhotoGrid
			break
	}

	return Block ? <Block key={`index-${index}`} {...rest} /> : null
}

const BlockManager = ({ blocks }) => {
	return <>{blocks.map(getBlockComponent)}</>
}

BlockManager.defaultProps = {
	blocks: [],
}

export default BlockManager

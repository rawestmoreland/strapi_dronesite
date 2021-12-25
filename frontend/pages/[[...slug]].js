import BlockManager from '../components/shared/BlockManager'
import Layout from '../components/shared/Layout'
import Seo from '../components/shared/Seo'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getLocalizedPaths } from '../utils/localize-helpers'
import { getGlobalData, getAllPageData, fetchAPI } from '../utils/api-helpers'

const Universals = ({ pageData, global, pageContext }) => {
	const router = useRouter()
	const blocks = pageData?.blocks
	const metaData = pageData?.metaData

	// Check if the required data was provided
	if (!router.isFallback && !blocks?.length) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<Layout global={global} pageContext={pageContext}>
			<Seo metaData={metaData} />
			<BlockManager blocks={blocks} />
		</Layout>
	)
}

export async function getStaticPaths({ locales }) {
	const allPages = locales.map(async (locale) => {
		const localePages = await fetchAPI(`/pages?_locale=${locale}`)
		return localePages
	})

	const pages = await (await Promise.all(allPages)).flat()

	const paths = pages.map((page) => {
		// Decompose the slug that was saved in Strapi
		const slugArray = !page.slug ? false : page.slug.split('/')

		return {
			params: { slug: slugArray },
			// Specify the locale to render
			locale: page.locale,
		}
	})

	return { paths, fallback: true }
}

export async function getStaticProps({
	locale,
	locales,
	defaultLocale,
	params,
}) {
	// const { data } = await client.query({
	// 	query: gql`
	// 		query GetPagesBySlug($slug: String, $locale: String) {
	// 			pages(locale: $locale, where: { slug: $slug }) {
	// 				shortName
	// 				slug
	// 				locale
	// 				blocks {
	// 					__typename
	// 					... on ComponentBlocksHero {
	// 						title
	// 					}
	// 				}
	// 				localizations {
	// 					id
	// 					slug
	// 					locale
	// 				}
	// 			}
	// 		}
	// 	`,
	// 	variables: {
	// 		slug: params.slug ? params.slug[0] : '',
	// 		locale,
	// 	},
	// })

	const slug = params.slug ? params.slug[0] : ''

	const pageData = await getAllPageData(locale, slug)

	if (pageData == null) {
		// Giving the page no props will trigger a 404 page
		return { props: {} }
	}

	const pageContext = {
		locale: pageData.locale,
		localizations: pageData.localizations,
		locales,
		defaultLocale,
		slug: params.slug ? params.slug[0] : '',
	}

	const localizedPaths = getLocalizedPaths(pageContext)
	const globalData = await getGlobalData(locale)

	return {
		props: {
			global: globalData,
			pageData,
			pageContext: {
				...pageContext,
				localizedPaths,
			},
		},
	}
}

export default Universals

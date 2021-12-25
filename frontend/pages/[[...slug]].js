import { gql } from '@apollo/client'
import client from '../lib/apollo-client'

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
	// array of locales provided in context object in getStaticPaths
	const paths = await Promise.all(
		locales.map(async (locale) => {
			// map through the locales
			const { data } = await client.query({
				query: gql`
					query GetAllPages($locale: String) {
						pages(local: $locale) {
							slug
							locale
						}
					}
				`,
				variables: { locale },
			})
			return {
				pages: data.pages,
				locale,
			}
		})
	).reduce((acc, item) => {
		item.pages.map((p) => {
			// reduce through the array of returned objects
			acc.push({
				params: {
					slug: p.slug === '/' ? false : p.slug.split('/'),
				},
				locale: p.locale,
			})
			return p
		})
		return acc
	}, [])
	return {
		paths,
		fallback: false,
	}
}

export async function getServerSideProps({
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

import gql from 'graphql-tag'
import client from '../lib/apollo-client'

// Get the url of the Strapi API based om the env variable or the default local one.
export function getStrapiURL(path) {
	return `${
		process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1338'
	}${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path, options = {}) {
	const defaultOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	const mergedOptions = {
		...defaultOptions,
		...options,
	}
	const requestUrl = getStrapiURL(path)
	const response = await fetch(requestUrl, mergedOptions)

	if (!response.ok) {
		console.error(response.statusText)
		throw new Error(`An error occured please try again`)
	}
	const data = await response.json()
	return data
}

// This function will get the url of your medias depending on where they are hosted
export function getStrapiMedia(url) {
	if (url == null) {
		return null
	}
	if (url.startsWith('http') || url.startsWith('//')) {
		return url
	}
	return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1338'}${url}`
}

export const getGlobalData = async (locale) => {
	const { data } = await client.query({
		query: gql`
			query GetGlobal($locale: String) {
				global(locale: $locale) {
					locale
					metadata {
						metaTitle
						metaDescription
						twitterCardType
						twitterUsername
						shareImage {
							formats
							url
							alternativeText
						}
					}
					metaTitleSuffix
					favicon {
						url
					}
					navbar {
						title
						links {
							id
							text
							url
							newTab
						}
					}
				}
			}
		`,
		variables: {
			locale,
		},
	})

	return data.global
}

export const getAllPageData = async (locale, slug) => {
	const path = `/pages?_locale=${locale}&slug=${slug}`

	const data = await fetchAPI(path)

	return data[0]
}

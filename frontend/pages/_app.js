import Head from 'next/head'
import ErrorPage from 'next/error'
import App from 'next/app'
import { DefaultSeo } from 'next-seo'
import { getStrapiMedia } from '../utils'
import { getGlobalData } from '../utils/api-helpers'
import './global.css'

function MyApp({ Component, pageProps }) {
	const { global } = pageProps

	if (global == null) {
		return <ErrorPage statusCode={404} />
	}

	const { metadata } = global
	return (
		<>
			<Head>
				<link
					rel='shortcut icon'
					href={getStrapiMedia(global.favicon.url)}
				/>
			</Head>
			<DefaultSeo
				titleTemplate={`%s | ${global.metaTitleSuffix}`}
				title={metadata.metaTitle}
				description={metadata.metaDescription}
				openGraph={{
					images: Object.values(metadata.shareImage.formats).map(
						(image) => {
							return {
								url: getStrapiMedia(image.url),
								width: image.width,
								height: image.height,
							}
						}
					),
				}}
				twitter={{
					cardType: metadata.twitterCardType,
					handle: metadata.twitterUsername,
				}}
			/>
			<Component {...pageProps} />
		</>
	)
}

MyApp.getInitialProps = async (appContext) => {
	// Calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext)
	const globalLocale = await getGlobalData(appContext.router.locale)

	return {
		...appProps,
		pageProps: {
			global: globalLocale,
		},
	}
}

export default MyApp

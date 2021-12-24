import Head from 'next/head'
import ErrorPage from 'next/error'

import { DefaultSeo } from 'next-seo'
import { getStrapiMedia } from '../utils'
import './global.css'

function MyApp({ Component, pageProps }) {
	const { global } = pageProps
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

export default MyApp

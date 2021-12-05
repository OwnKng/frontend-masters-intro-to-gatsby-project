import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export function Seo(props) {
	const data = useStaticQuery(graphql`
		query GetSiteMetaData {
			site {
				siteMetadata {
					title
					description
					siteUrl
				}
			}
		}
	`)

	const defaults = data?.site?.siteMetadata

	const title = props.title || defaults.title
	const description = props.description || defaults.description
	const image = props.image || defaults.image

	const url = new URL(props.path || '/', defaults.siteUrl)

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={url} />
			{image && <meta name="og:image" content={image} />}
		</Helmet>
	)
}

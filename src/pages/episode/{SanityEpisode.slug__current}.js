import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'

export const query = graphql`
	query SanityEpisode($id: String!) {
		sanityEpisode(id: { eq: $id }) {
			title
			description
			slug {
				current
			}
			youtubeID
			date(fromNow: true)
			image {
				asset {
					gatsbyImageData(placeholder: DOMINANT_COLOR)
				}
			}
		}
	}
`

export default function SanityEpisode({ data }) {
	const episode = data.sanityEpisode

	return (
		<Layout title={episode.title} description={episode.description}>
			<h1>{episode.title}</h1>
			<p>
				(posted on {episode.date}) - {episode.description}
			</p>
			<a href={`https://youtu.be/${episode.youtubeID}`}>Watch on YouTube</a>
		</Layout>
	)
}

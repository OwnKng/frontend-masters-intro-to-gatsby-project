import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import { imageWrapper } from '../styles/index.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const App = () => {
	const data = useStaticQuery(graphql`
		query getBlogPosts {
			allMdx(filter: {}, sort: { fields: frontmatter___date, order: DESC }) {
				nodes {
					frontmatter {
						title
						date(fromNow: true)
					}
					id
					slug
				}
			}

			allSanityEpisode(
				sort: { fields: date, order: DESC }
				filter: { youtubeID: { ne: null } }
				limit: 20
			) {
				nodes {
					id
					title
					guest {
						name
					}
					gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
				}
			}
		}
	`)

	const posts = data.allMdx.nodes
	const episodes = data.allSanityEpisode.nodes

	console.log(episodes)

	return (
		<Layout>
			<div className={imageWrapper}>
				<StaticImage
					src="../images/cocktail.jpg"
					alt="an image of a cocktail"
					placeholder="dominantColor"
					width="300px"
					height="300px"
				/>
			</div>
			<h1>Hello World!</h1>
			<p>Helllooooo</p>
			<div>
				<ul>
					{posts.map((post) => (
						<li key={post.id}>
							<Link to={post.slug}>{post.frontmatter.title}</Link>
						</li>
					))}
				</ul>
			</div>
			<div>
				{episodes.map((episode) => (
					<li key={episode.id}>
						<Link to={episode.gatsbyPath}>{episode.title}</Link>
					</li>
				))}
			</div>
		</Layout>
	)
}

export default App

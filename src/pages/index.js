import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Seo } from '../components/seo'
import Layout from '../components/Layout'

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
		}
	`)

	const posts = data.allMdx.nodes

	return (
		<Layout>
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
		</Layout>
	)
}

export default App

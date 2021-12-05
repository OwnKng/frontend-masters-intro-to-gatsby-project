import * as React from 'react'
import { Link } from 'gatsby'
import Layout from './Layout'

const PostLayout = ({ children, pageContext }) => {
	const { title, description } = pageContext.frontmatter

	return (
		<Layout title={title} description={description}>
			{children}
			<Link to="/">Home</Link>
		</Layout>
	)
}

export default PostLayout

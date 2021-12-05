import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const query = graphql`
	query MyQuery {
		file(name: { eq: "cocktail" }) {
			childImageSharp {
				gatsbyImageData(placeholder: DOMINANT_COLOR)
			}
		}
	}
`

const About = ({ data }) => {
	return (
		<Layout>
			<h1>About</h1>
			<Link to="/">Back to home</Link>
			<GatsbyImage image={getImage(data.file)} alt="an image" />
		</Layout>
	)
}

export default About

module.exports = {
	siteMetadata: {
		title: `Gatsby`,
		siteUrl: `https://www.gatsbyjs.com`,
		description: `Blazing fast modern site generator for React`,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/src/posts`,
			},
		},
		{
			resolve: 'gatsby-plugin-page-creator',
			options: {
				path: `${__dirname}/src/posts`,
			},
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				defaultLayouts: {
					posts: require.resolve('./src/components/PostLayout.js'),
				},
			},
		},
	],
}

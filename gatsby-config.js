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
		'gatsby-remark-images',
		{
			resolve: 'gatsby-plugin-mdx',

			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1200,
						},
					},
				],
				defaultLayouts: {
					posts: require.resolve('./src/components/PostLayout.js'),
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-sanity',
			options: {
				projectId: 'vnkupgyb',
				dataset: 'production',
			},
		},
	],
}

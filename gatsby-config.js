const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const queries = [
  {
    query: `{
      allMicrocmsArticle {
        edges {
          node {
            objectID: articleId 
            title
            description
          }
        }
      }
    }`,
    transformer: ({ data }) =>
      data.allMicrocmsArticle.edges.map(({ node }) => {
        return {
          objectID: node.objectID,
          title: node.title,
          description: node.description
        };
      }),
    settings: {
      queryLanguages: ['ja']
    },
    matchFields: ['title', 'description']
  }
];

module.exports = {
  siteMetadata: {
    title: `hiro08.dev`,
    description: `Web FrontEnd Engineer.`,
    siteUrl: `https://hiro08.dev`,
    author: `@hiro08gh`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    'gatsby-plugin-no-sourcemaps',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        libs: path.join(__dirname, 'src/libs'),
        types: path.join(__dirname, 'src/types'),
        hooks: path.join(__dirname, 'src/libs/hooks')
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/components/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.TRACKING_ID
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMicrocmsArticle } }) => {
              return allMicrocmsArticle.edges.map((edge) => {
                return Object.assign({}, edge.node, {
                  description: edge.node.description,
                  date: edge.node.createdAt,
                  url: site.siteMetadata.siteUrl + '/article/' + edge.node.articleId,
                  guid: site.siteMetadata.siteUrl + '/article/' + edge.node.articleId
                });
              });
            },
            query: `
              {
                allMicrocmsArticle(
                  sort: { fields: [createdAt], order: DESC },
                ) {
                  edges {
                    node {
                      id
                      title
                      description
                      articleId
                      createdAt
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: 'hiro08.dev'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.API_KEY,
        serviceId: process.env.SERVICE_ID,
        apis: [
          {
            endpoint: 'article'
          },
          {
            endpoint: 'blog'
          },
          {
            endpoint: 'category'
          }
        ]
      }
    }
  ]
};

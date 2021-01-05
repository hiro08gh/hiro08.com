const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `hiro08.dev`,
    description: `Web FrontEnd Engineer.`,
    siteUrl: `https://hiro08.dev`,
    author: `@hiro08gh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.TRACKING_ID,
      },
    },
    // RSSフィードの作成
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
            serialize: ({ query: { site, allMicrocmsBlog } }) => {
              return allMicrocmsBlog.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.description,
                  date: edge.node.createdAt,
                  url: site.siteMetadata.siteUrl + "/blog/" + edge.node.blogId,
                  guid: site.siteMetadata.siteUrl + "/blog/" + edge.node.blogId,
                })
              })
            },
            query: `
              {
                allMicrocmsBlog(
                  sort: { fields: [createdAt], order: DESC },
                ) {
                  edges {
                    node {
                      id
                      title
                      description
                      blogId
                      createdAt
                    }
                  }
                }
              }
            `,
            // blogフォルダにfeed.xmlを作成
            output: "/feed.xml",
            title: "hiro08.dev",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.API_KEY,
        serviceId: process.env.SERVICE_ID,
        apis: [
          {
            endpoint: "blog",
          },
          {
            endpoint: "category",
          },
        ],
      },
    },
  ],
}

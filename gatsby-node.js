const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMicrocmsBlog(limit: 1000) {
          edges {
            node {
              id
              blogId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }
}

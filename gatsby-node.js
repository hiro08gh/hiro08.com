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
        allMicrocmsCategory(limit: 1000) {
          edges {
            node {
              id
              categoryId
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

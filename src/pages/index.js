import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data: { allMicrocmsBlog } }) => (
  <Layout>
    {allMicrocmsBlog.edges.map(({ node }) => (
      <React.Fragment key={node.id}>{node.title}</React.Fragment>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsBlog(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

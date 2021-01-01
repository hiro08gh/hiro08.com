import React from "react"
import { graphql, Link } from "gatsby"

import { MainLayout } from "../components/layouts/MainLayout"

const IndexPage = ({ data: { allMicrocmsBlog } }) => (
  <MainLayout>
    {allMicrocmsBlog.edges.map(({ node }) => (
      <React.Fragment key={node.id}>
        <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
      </React.Fragment>
    ))}
  </MainLayout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsBlog(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          blogId
          title
        }
      }
    }
  }
`

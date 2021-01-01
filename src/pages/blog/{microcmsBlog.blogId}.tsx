import React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../../components/layout"

const BlogTemplate = ({ data: { microcmsBlog } }) => {
  const blog = microcmsBlog
  return <Layout>{blog.title}</Layout>
}

export default BlogTemplate

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
    }
  }
`

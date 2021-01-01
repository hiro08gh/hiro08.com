import React from "react"
import { graphql, Link } from "gatsby"
import { MainLayout } from "../../components/layouts/MainLayout"

const BlogTemplate = ({ data: { microcmsBlog } }) => {
  const blog = microcmsBlog
  return <MainLayout>{blog.title}</MainLayout>
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

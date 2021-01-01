import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/reset.scss"

import Header from "./header"

type Props = {
  children: React.childeNode
}

export const Layout: React.FC<Props> = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{props.children}</main>
      </div>
    </>
  )
}

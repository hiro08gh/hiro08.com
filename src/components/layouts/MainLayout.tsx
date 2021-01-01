import React from "react"
import "../../styles/reset.scss"

import Header from "../header"

type Props = {
  children: React.childeNode
}

export const MainLayout: React.FC<Props> = props => {
  return (
    <div className="main">
      <Header siteTitle="hiro08.dev" />
      <main>{props.children}</main>
    </div>
  )
}

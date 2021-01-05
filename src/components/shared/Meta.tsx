import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

type Props = {
  metaTitle?: string
  metaDescription?: string
  metaUrl?: string
  metaImage?: string
}

export const Head: React.FC<Props> = props => {
  const { metaTitle, metaDescription, metaUrl, metaImage } = props
  const { title, description, image, siteUrl } = useSiteMetadata()

  return (
    <Helmet
      htmlAttributes={{
        lang: "ja",
      }}
    >
      <title>{metaTitle ? `${metaTitle} | hiro08.dev` : `hiro08.dev`}</title>
      <meta name="description" content={metaDescription ? metaDescription : description} />
      {/* Social meta */}
      <meta property="og:title" content={metaTitle ? metaTitle : title} />
      <meta property="og:description" content={metaDescription ? metaDescription : description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImage ? metaImage : image} />
      <meta name="twitter:title" content={metaTitle ? metaTitle : title} />
      <meta name="twitter:description" content={metaDescription ? metaDescription : description} />
      <meta name="twitter:url" content={metaUrl ? siteUrl + metaUrl : siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={metaImage ? metaImage : image} />
    </Helmet>
  )
}

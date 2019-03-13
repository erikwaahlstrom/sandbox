import React from "react"

import AppFrame from "../components/AppFrame"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <AppFrame>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </AppFrame>
)

export default NotFoundPage

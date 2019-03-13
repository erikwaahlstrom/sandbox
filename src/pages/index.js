import React from "react"
import { Link } from "gatsby"

import AppFrame from "../components/AppFrame"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <AppFrame>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <h1>First page</h1>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </AppFrame>
)

export default IndexPage

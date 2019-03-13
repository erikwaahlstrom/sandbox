import React from "react"
import { Link } from "gatsby"

import AppFrame from "../components/AppFrame"
import SEO from "../components/seo"

const SecondPage = () => (
  <AppFrame>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <Link to="/">Go back to the homepage</Link>
  </AppFrame>
)

export default SecondPage

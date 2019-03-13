import React from "react"
import { Link } from "gatsby"

import AppFrame from "../components/AppFrame"
import Image from "../components/Image"

const IndexPage = () => (
  <AppFrame>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <h1>First page</h1>
      <Image />
    </div>
    <Link to="/secound-page/">Page 2</Link>
  </AppFrame>
)

export default IndexPage

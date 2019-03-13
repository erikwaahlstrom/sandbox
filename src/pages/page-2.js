import React from "react"
import { Link } from "gatsby"

import AppFrame from "../components/AppFrame"

const SecondPage = () => (
  <AppFrame>
    <h1>Hi from the second page</h1>
    <Link to="/">Go back to the homepage</Link>
  </AppFrame>
)

export default SecondPage

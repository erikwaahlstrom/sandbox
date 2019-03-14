import React from "react"
import { Link } from "gatsby"
import AppFrame from "../components/AppFrame"
import GridImageComponent from "../components/GridImageComponent"

const SecondPage = () => (
  <AppFrame>
    <h1>First Page</h1>
    <GridImageComponent />
    <Link to="/second-page">Page 2</Link>
  </AppFrame>
)
export default SecondPage

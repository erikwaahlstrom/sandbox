import React from "react"
import { Link } from "gatsby"
import AppFrame from "../components/AppFrame"
import GridImageComponent from "../components/GridImageComponent"

const SecondPage = () => (
  <AppFrame>
    <GridImageComponent />
    <Link to="/second-page">Page 2</Link>
  </AppFrame>
)
export default SecondPage

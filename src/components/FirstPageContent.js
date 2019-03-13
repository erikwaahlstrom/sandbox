import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import AppFrame from "../components/AppFrame"

const SecondPage = () => (
  <AppFrame>
    <StaticQuery
      query={firstPageImgQuery}
      render={data => {
        return (
          <>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <h1>First page</h1>
              <Image fluid={data.avatar.childImageSharp.fluid} alt="zimply" />
            </div>
            <Link to="/secound-page/">Page 2</Link>
          </>
        )
      }}
    />
  </AppFrame>
)

const firstPageImgQuery = graphql`
  query {
    avatar: file(relativePath: { eq: "zimply_stor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SecondPage

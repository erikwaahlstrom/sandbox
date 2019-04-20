import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import AppFrame from "../components/AppFrame"

const SecondPage = () => (
  <AppFrame>
    <StaticQuery
      query={secoundPageImgQuery}
      render={data => {
        return (
          <>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <h1>Second Page</h1>
              <Image fluid={data.avatar.childImageSharp.fluid} alt="zimply" />
              <Image fluid={data.astro.childImageSharp.fluid} alt="zimply" />
            </div>
            <Link to="/">Page 1</Link>
            <Link to="/third-page">Page 3</Link>
          </>
        )
      }}
    />
  </AppFrame>
)

const secoundPageImgQuery = graphql`
  query {
    avatar: file(relativePath: { eq: "zimply_stor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    astro: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SecondPage

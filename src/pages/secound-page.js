import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import AppFrame from "../components/AppFrame"

const SecondPage = () => (
  <AppFrame>
    <StaticQuery
      query={secoundPageQuery}
      render={data => {
        return (
          <>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Image fluid={data.avatar.childImageSharp.fluid} alt="zimply" />
            </div>
            <Link to="/">Page 1</Link>
          </>
        )
      }}
    />
  </AppFrame>
)

const secoundPageQuery = graphql`
  query BioQuery {
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

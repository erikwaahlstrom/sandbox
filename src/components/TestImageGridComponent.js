import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import AppFrame from "../components/AppFrame"

const TestImageGridComponent = () => (
  <AppFrame>
    <StaticQuery
      query={TestImageGridQuery}
      render={data => {
        return (
          <>
            <div style={{ maxWidth: "500px" }}>
              <h1>Test Image Component</h1>
              <Image fluid={data.zimply.childImageSharp.fluid} alt="zimply" />
            </div>
          </>
        )
      }}
    />
  </AppFrame>
)
const TestImageGridQuery = graphql`
  query {
    zimply: file(relativePath: { eq: "zimply_stor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default TestImageGridComponent

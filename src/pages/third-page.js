import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import AppFrame from "../components/AppFrame"

const ThirdPage = () => (
  <AppFrame>
    <StaticQuery
      query={thirdPageImgQuery}
      render={data => {
        return (
          <>
            {/**** HEADER NAV ****/}
            <div
              style={{
                background: "#e3e3e3",
                width: "100%",
                height: "68px",
              }}
            >
              Header Container
            </div>
            {/**** HEADER NAV - END ****/}
            {/**** HEADER IMAGE ****/}
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              fluid={data.layke.childImageSharp.fluid}
              alt="zimply"
            />
            {/**** HEADER IMAGE - END ****/}
            <h1>Third page</h1>
            <Link to="/">Page 1</Link>
            <Link to="/">Page 2</Link>
          </>
        )
      }}
    />
  </AppFrame>
)

const thirdPageImgQuery = graphql`
  query {
    layke: file(relativePath: { eq: "coin.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ThirdPage

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import AppFrame from "../components/AppFrame"
import Link from "gatsby-link"

const TestImageGridComponent = () => {
  return (
    <AppFrame>
      <StaticQuery
        query={TestImageGridQuery}
        render={data => {
          const companies = [
            {
              title: "Zimply",
              to: "/second-page/",
              zSrc: data.zimply.childImageSharp.fluid,
            },
          ]
          return (
            <>
              {companies.map((item, i) => (
                <>
                  <Link to={item.to}>
                    <Image key={i} fluid={item.zSrc} alt="zimply" />
                    <h1>{item.title}</h1>
                  </Link>
                </>
              ))}
            </>
          )
        }}
      />
    </AppFrame>
  )
}
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

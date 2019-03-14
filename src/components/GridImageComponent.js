import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import AppFrame from "../components/AppFrame"

const GridImageComponent = () => (
  <AppFrame>
    <StaticQuery
      query={graphql`
        query allimgQuery {
          source: allFile(filter: { absolutePath: { regex: "/puffs/" } }) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          {data.source.edges.map(({ node }, i) => (
            <Image key={i} fluid={node.childImageSharp.fluid} />
          ))}
        </div>
      )}
    />
  </AppFrame>
)
export default GridImageComponent

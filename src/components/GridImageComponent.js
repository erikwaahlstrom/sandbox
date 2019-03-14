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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridGap: "15px",
          }}
        >
          {data.source.edges.map(({ node }, i) => (
            <>
              <Image
                style={{
                  width: "100%",
                  // If Grid column index < 2 (true) => span 2 (grid column 2 / 4). If not (false) => span 1 (1 / 4).
                  gridColumn: i < 2 ? "span 2" : "span 1",
                }}
                key={i}
                fluid={node.childImageSharp.fluid}
              />
            </>
          ))}
        </div>
      )}
    />
  </AppFrame>
)
export default GridImageComponent

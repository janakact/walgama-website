import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Image({ imageName, alt, imageProps }) {
  return (
    <StaticQuery
      query={graphql`
      query {
        allFile(filter: { 
          sourceInstanceName: { eq: "uploads" }
       }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 760) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
      render={data => {
        const element = imageName ? data.allFile.edges.find(
          ({ node }) => {
            return node.relativePath === imageName
          }
        ) : "";

        const img = element ? element.node : undefined;
        if (!img) return null;
        return <Img fluid={img.childImageSharp.fluid} {...imageProps} />
      }
      }
    />)

}

import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Logo() {
  return (
    <StaticQuery
      query={graphql`
      query {
        logo_sinhala: file(
          sourceInstanceName: { eq: "media" }
          name: { eq: "logo_sinhala" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        logo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "logo2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
      render={data =>
        <Img fluid={data.logo.childImageSharp.fluid} />
      }
    />)

}

import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { BlackFrame } from '../../global';

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
          name: { eq: "logo-with-background" }
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
          <Img style={{borderRadius: 10, margin: 5}} fluid={data.logo.childImageSharp.fluid} />
      }
    />)

}

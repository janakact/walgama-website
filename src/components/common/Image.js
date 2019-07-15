import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Logo({img, alt}) {
    return (
        <StaticQuery
            query={graphql`
      query {
        logo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "${img}" }
        ) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
            render={data =>
                <Img fluid={data[img].childImageSharp.fluid} alt={alt} />
            }
        />)

}

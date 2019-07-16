import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        founder: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "founder" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        logo_post: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "logo_post" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "logo" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid inverse>
            <Art>
              <Img fluid={data.logo_post.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Our Vision</h2>
              <p>
                <ul>
                  <li>
                    Adding modern technology to our products.
                  </li>
                  <li> Expansion of our products throughout the country and abroad.</li>
                  <li>To be a leading institute in the field of Ayurveda.</li>
                  <li>Our objective is to contribute to the cure of patients by introducing new Ayurvedic drugs into the market and distributing quality Ayurvedic medicines</li>
                </ul>
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>History</h2>
              <p>
                The Walgama Pharmaceutical Manufacturing Company was founded in 1952 by Indigenous  Doctor Mr.M.D.P.Rupathunga.Various ayurvedic oils,Tinctures,Āsava,Panta as well as ayurvedic drug products that cure specific diseases are produced by us. For this purpose local and imported quality herbal ingredients are used and more than 143 pharmaceuticals are currently in production and distribution.As a private company since 2012 the productions are carried out in conformity with the Sri Lanka Standards Institution (SLSI).
              </p>
            </div>
            <Art>
              <Img fluid={data.founder.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Our Services</h2>
              <p>
                <ul>
                  <li>Our products ordering service is available anywhere in the country</li>
                  <li>Provision of  Ayurvedic medicines to Ayurvedic Doctors</li>
                  <li>Ayurvedic medical centers for further treatments.</li>
                  <li>Ayurvedic Pharmaceutical raw materials supply service for the registered Doctors at our institution.</li>
                </ul>
              </p>
            </div>
          </Grid>
        </Container>
      </Section >
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
    props.inverse &&
    `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;

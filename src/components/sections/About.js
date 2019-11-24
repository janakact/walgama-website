import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import { Parallax } from 'react-scroll-parallax';
import { Panel } from '../global';
import { getImage } from '../../lib/getImage';

const About = () => (
  <StaticQuery
    query={graphql`
      query {

        allFile(filter: { sourceInstanceName: { eq: "media" } }) {
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

        
        allDataJson{
            edges{
              node{
                about{
                  company
                  aboutEnglish
                  aboutSinhala
                  founderImage
                  objectiveEnglish
                  objectiveSinhala
                  visionEnglish
                  visionSinhala
                  achievements {
                    english
                    sinhala
                    image
                  }
                }
              }
            }
        }

      }
    `}
    render={data => {

      const about = data.allDataJson.edges[0].node.about

      return (
        <Section id="about" accent="secondary">
          <Container>
            <Panel>

              <h1 style={{ color: 'white', backgroundColor: 'transparent' }}>About</h1>
              <Grid inverse>
                {/* <Art>
              <Img fluid={data.logo_post.childImageSharp.fluid} />
            </Art> */}
                <Art>
                  <Img style={{ borderRadius: '100%' }} fluid={getImage(data.allFile, about.founderImage)} />
                </Art>
                <div>
                  <Text style={{ fontSize: 20 }} >
                    {about.aboutEnglish}
                  </Text><br/>
                  <Text className="sinhala-font">
                    {about.aboutSinhala}
                  </Text>
                  {/* <Text style={{ fontSize: 15 }}>
                <small>
                  The Walgama Pharmaceutical Manufacturing Company was founded in 1952 by Indigenous  Doctor Mr.M.D.P.Rupathunga.Various ayurvedic oils,Tinctures, Āsava,Panta as well as ayurvedic drug products that cure specific diseases are produced by us. For this purpose local and imported quality herbal ingredients are used and more than 143 pharmaceuticals are currently in production and distribution.As a private company since 2012 the productions are carried out in conformity with the Sri Lanka Standards Institution (SLSI).
                </small>
              </Text> */}
                </div>
              </Grid>
              <div>
                <Title >Objective</Title>
                <Text style={{ fontSize: 20 }} > {about.objectiveEnglish}</Text>
                <Text className="sinhala-font"> {about.objectiveSinhala}</Text>
              </div>

              <div style={{ paddingTop: 30 }}>
                <Title >Vision</Title>
                <Text style={{ fontSize: 20 }} > {about.visionEnglish}</Text>
                <Text className="sinhala-font"> {about.visionSinhala}</Text>
              </div>
              <div style={{ paddingTop: 30 }}>
                <Title >Achievements</Title>
                {
                  about.achievements.map(a =>
                    <Grid>
                      <div style={{ paddingTop: 30 }}>
                        <Text style={{ fontSize: 20 }} > {a.english}</Text>
                        <Text className="sinhala-font"> {a.sinhala}</Text>
                      </div>
                      <Art>
                        <Img fluid={getImage(data.allFile, a.image)} />
                      </Art>
                    </Grid>
                  )
                }
              </div>
            </Panel>
          </Container>
        </Section >
      )
    }
    }
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


const Text = styled.p`
        font-size: 30px;
        opacity: 0.5;
        color: white
      `;

const Title = styled.h2`
        opacity: 0.9;
        color: white
      `;


const Art = styled.figure`
        margin: 0;
        max-width: 380px;
        width: 100%;
      `;

export default About;

import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'භෘංගරාජ තෛලය',
    image: 'brungaraja.jpg',
    role: 'ක්‍රියාකාරී සංයෝග පහක් සමඟ කේශ වර්ධනය උද්දීපනය කරයි.',
  },
  {
    name: 'දසවග කසාය',
    image: 'Dasawaga kasaya.jpg',
    // role: 'ක්‍රියාකාරී සංයෝග පහක් සමඟ කේශ වර්ධනය උද්දීපනය කරයි.',
  },
  // {
  //   name: 'Lisa Haydon',
  //   image: 'lisa.jpg',
  //   role: 'Art Director',
  // },
  // {
  //   name: 'Ashlyn Harris',
  //   image: 'ashlyn.jpg',
  //   role: 'Frontend Engineer',
  // },
  // {
  //   name: 'Todd Joseph',
  //   image: 'todd.jpg',
  //   role: 'Designer',
  // },
  // {
  //   name: 'Martin White',
  //   image: 'martin.jpg',
  //   role: 'Backend Engineer',
  // },
  // {
  //   name: 'Rose Leslie',
  //   image: 'rose.jpg',
  //   role: 'Marketing',
  // },
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "product" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="products" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Products</h1>
          <TeamGrid>
            {TEAM.map(({ name, image, role }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
          {/* <Art>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </Art> */}
          {/* <ArtMobile>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </ArtMobile> */}
        </Container>
      </Section>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 18px;
  font-weight: bold;
  opacity: 0.8;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  opacity: 0.6;
  color: ${props => props.theme.color.black.light};
`;

export default Team;

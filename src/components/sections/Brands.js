import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as AirbnbLogo } from '@images/logos/airbnb.svg';
import { ReactComponent as AppleMusicLogo } from '@images/logos/apple-music.svg';
import { ReactComponent as CokeLogo } from '@images/logos/coca-cola.svg';
import { ReactComponent as NodeLogo } from '@images/logos/nodejs.svg';
import { ReactComponent as NikeLogo } from '@images/logos/nike.svg';
import { ReactComponent as InstagramLogo } from '@images/logos/instagram.svg';

const LOGOS = [
  {
    logo: AirbnbLogo,
    link: 'https://airbnb.io',
  },
  {
    logo: AppleMusicLogo,
    link: 'https://www.apple.com/in/music/',
  },
  {
    logo: CokeLogo,
    link: 'https://coca-cola.com',
  },
  {
    logo: NodeLogo,
    link: 'https://nodejs.org',
  },
  {
    logo: NikeLogo,
    link: 'https://nike.com',
  },
  {
    logo: InstagramLogo,
    link: 'https://instagram.com',
  },
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "a4" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="brands">
        <StyledContainer>
          {/* <div>
            <h1>Used by biggest in tech</h1>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink href={link}>{logo()}</ExternalLink>
              ))}
            </LogoGrid>
          </div> */}
          <h1>Lol</h1>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 64px;
      justify-items: center;
      margin-top: 96px;
    
  a {
          svg {
        width: 100%;
      }
    }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
          grid - template - columns: 1fr;
      }
    `;

const StyledContainer = styled(Container)`
      display: flex;
      justify-content: flex-end;
    
  @media (max-width: ${props => props.theme.screen.md}) {
          justify - content: center;
      }
    `;

const Art = styled.figure`
  margin:0;
  max-width:100px;
  position: absolute;
`;

export default UsedBy;

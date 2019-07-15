import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


import Carousel from 'nuka-carousel';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        p1: file(
          sourceInstanceName: { eq: "product" }
          name: { eq: "lasunu2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        p2: file(
          sourceInstanceName: { eq: "product" }
          name: { eq: "pawatta thalsukiri" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Carousel>
            <Grid>
              <Img fluid={data.p1.childImageSharp.fluid} />
              <Text>
                <h1>
                  ශ්‍රී ලසුනු පද්ම තෛලය
                </h1>
                <p>
      හිසරදය වහා සමනය කරන පාරම්පරික ඖෂධීය තෛලය.
                </p>
              </Text>
            </Grid>
            <Grid>
              <Img fluid={data.p2.childImageSharp.fluid} />
              <Text>
                <h1>
                  Anywhere in the country..
                <br />
                  every way
                <br />
                  that matters
              </h1>
                <br />
                <p>
                  <StyledExternalLink href="https://github.com/ajayns/gatsby-absurd">
                    Check out source &nbsp;&#x2794;
                </StyledExternalLink>
                </p>
              </Text>
            </Grid>
          </Carousel>
        </Container>
      </HeaderWrapper>
    )}
  />
);




// background-color: ${props => props.theme.color.primary};
const HeaderWrapper = styled.header`
  padding-top: 96px;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;

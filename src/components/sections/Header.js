import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


import Carousel from 'nuka-carousel';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import Slider from '../common/Navbar/Slider';
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
        allFile(filter: { sourceInstanceName: { eq: "product" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1400, maxHeight: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        p1: file(
          sourceInstanceName: { eq: "product" }
          name: { eq: "gugguladi" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        p2: file(
          sourceInstanceName: { eq: "product" }
          name: { eq: "lily" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        p3: file(
          sourceInstanceName: { eq: "product" }
          name: { eq: "mahaneelyadi" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        p4: file(
          sourceInstanceName: { eq: "product" }
          name: { eq: "lasunu" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      const items = SLIDE_ITEMS.map((item, i) => ({
        fluid: data.allFile.edges.find(
          ({ node }) => node.relativePath === item.image
        ).node.childImageSharp.fluid, ...item
      }));
      return (
        <HeaderWrapper>
          <Container>
            <Slider items={items}>

            </Slider>
            {/* <Carousel renderBottomLeftControls={() => <div style={{ margin: 50, padding: 100, backgroundColor: 'rgba(0,0,0,0.5)', width: '100%' }}>Something</div>}>
              <Img style={{ maxHeight: 800 }} fluid={data.p1.childImageSharp.fluid} />
              <Img style={{ maxHeight: 800 }} fluid={data.p2.childImageSharp.fluid} />
              <Img style={{ maxHeight: 800 }} fluid={data.p3.childImageSharp.fluid} />
              <Img style={{ maxHeight: 800 }} fluid={data.p4.childImageSharp.fluid} />
            </Carousel> */}
          </Container>
        </HeaderWrapper>
      )
    }}
  />
);


const SLIDE_ITEMS = [
  {
    name: 'භෘංගරාජ තෛලය',
    description: "භෘංගරාජ් තෛලය පිළිබඳ විස්තරයක්",
    color1: 'brown',
    color2: '#f3cd16',
    image: 'brungaraja.jpg',
  },
  {
    name: 'ගැස්ට්‍රයිටීස් අම්ලපිත සුවය',
    image: 'Gastritis.jpg',
  },
  {
    name: 'කැස්ස පැණිය',
    image: 'kassa paniya.jpg',
  },
  {
    name: 'නීල්‍යාදී තෛලය',
    image: 'lily.jpg',
  },
  {
    name: 'ජීවශක්ති රසායනය',
    image: 'jeewashakthi.jpg',
  },
  {
    name: 'ගුග්ගුලාදී තෛලය',
    image: 'gugguladi.jpg',
  },
]

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

const Title = styled.h1`
  justify-self: center;
  color: ${props => props.theme.color.primary};

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

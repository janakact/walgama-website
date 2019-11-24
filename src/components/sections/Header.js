import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


import Carousel from 'nuka-carousel';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import Slider from '../common/Navbar/Slider';
import { getImage } from '../../lib/getImage';
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
        allFile(filter: { sourceInstanceName: { eq: "media" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 2400, maxHeight: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        allDataJson{
            edges{
               node{
                 slides {
                   name
                   description
                   color1
                   color2
                   backgroundColor
                   image
                }
              }
            }
        }
      }
    `}
    render={data => {
      const items = data.allDataJson.edges[0].node.slides.map((item, i) => ({
        fluid: getImage(data.allFile, item.image), ...item
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
    name: 'Experienced well trained staff ',
    description: "w;aoelSï nyq, ukd mqyqKq ld¾Hh uKav,h",
    color1: 'brown',
    color2: '#f3cd16',
    backgroundColor: 'gray',
    image: '1.png',
  },
  {
    name: 'Cleanliness and high quality ',
    description: "iqmsßisÿ nj iy by, .=Kd;aul nj'",
    backgroundColor: '#f6dc8b',
    color1: 'brown',
    color2: '#f3cd16',
    image: '2.png',
  },
  {
    name: 'Under the prescribed standards ',
    description: "kshñ; m%ñ;s ;;ajhkag hg;aj'",
    backgroundColor: '#f6dc8b',
    color1: 'brown',
    color2: '#f3cd16',
    image: '3.png',
  },
  {
    name: 'Dosage of prescribed herbal medicines ',
    description: "ksjerÈ Ydl!IO ud;%dkql+,j fh¥'",
    backgroundColor: 'brown',
    color1: 'brown',
    color2: '#f3cd16',
    image: '4.png',
  },
  {
    name: 'More than 142 Ayurvedic  products',
    description: "142lg wêl wdhq¾fõo ksIamdok",
    backgroundColor: 'white',
    color1: 'brown',
    color2: '#f3cd16',
    image: '5.png',
  },
  // {
  //   name: 'කැස්ස පැණිය',
  //   image: 'kassa paniya.jpg',
  // },
  // {
  //   name: 'නීල්‍යාදී තෛලය',
  //   image: 'lily.jpg',
  // },
  // {
  //   name: 'ජීවශක්ති රසායනය',
  //   image: 'jeewashakthi.jpg',
  // },
  // {
  //   name: 'ගුග්ගුලාදී තෛලය',
  //   image: 'gugguladi.jpg',
  // },
]

// background-color: ${props => props.theme.color.primary};
const HeaderWrapper = styled.header`
  padding-top: 72px;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 72px;

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

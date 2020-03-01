import React from 'react';
import { Row, Col, } from 'react-bootstrap'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import Product from '../common/Product';
import { Panel } from '../global';
import CategoryCard from '../common/CategoryCard';

// const PRODUCTS = [
//   {
//     name: 'භෘංගරාජ තෛලය',
//     image: 'brungaraja.jpg',
//   },
//   {
//     name: 'දසවග කසාය',
//     image: 'Dasawaga kasaya.jpg',
//   },
//   {
//     name: 'ගැස්ට්‍රයිටීස් අම්ලපිත සුවය',
//     image: 'Gastritis.jpg',
//   },
//   {
//     name: 'ගුග්ගුලාදී තෛලය',
//     image: 'gugguladi.jpg',
//   },
//   {
//     name: 'ජීවශක්ති රසායනය',
//     image: 'jeewashakthi.jpg',
//   },
//   {
//     name: 'කැස්ස පැණිය',
//     image: 'kassa paniya.jpg',
//   },
//   {
//     name: 'ශ්‍රී ලුසුණුපද්ම තෛලය',
//     image: 'lasunu.jpg',
//   },
//   {
//     name: 'සීතෝදක ලේපය',
//     image: 'lepaya.jpg',
//   },
//   {
//     name: 'නීල්‍යාදී තෛලය',
//     image: 'lily.jpg',
//   },
//   {
//     name: 'මධූහරණී',
//     image: 'madhuharani.jpg',
//   },
//   {
//     name: 'මහා නීල්‍යාදී තෛලය',
//     image: 'mahaneelyadi.jpg',
//   },
//   {
//     name: 'Mosquito Repellent Sticks',
//     image: 'mosquito stick.jpg',
//   },
//   {
//     name: 'මූලාබාධ සමනය',
//     image: 'mulabada.jpg',
//   },
//   {
//     name: 'Mosquito Repellent Spray',
//     image: 'pagiri spry.jpg',
//   },
//   {
//     name: 'පාවට්ටා තල්සූකිරි පැණිය',
//     image: 'pawatta thalsukiri.jpg',
//   },
//   {
//     name: 'සුගන්ධවත් නීල්‍යාදී තෛලය',
//     image: 'sugandawath neelyadi.jpg',
//   },
//   {
//     name: 'සුවඳ ධූප',
//     image: 'suwada dupa.jpg',
//   },
//   {
//     name: 'ස්වේතා',
//     image: 'swetha.jpg',
//   },
//   // {
//   //   name: 'Lisa Haydon',
//   //   image: 'lisa.jpg',
//   //   role: 'Art Director',
//   // },
//   // {
//   //   name: 'Ashlyn Harris',
//   //   image: 'ashlyn.jpg',
//   //   role: 'Frontend Engineer',
//   // },
//   // {
//   //   name: 'Todd Joseph',
//   //   image: 'todd.jpg',
//   //   role: 'Designer',
//   // },
//   // {
//   //   name: 'Martin White',
//   //   image: 'martin.jpg',
//   //   role: 'Backend Engineer',
//   // },
//   // {
//   //   name: 'Rose Leslie',
//   //   image: 'rose.jpg',
//   //   role: 'Marketing',
//   // },
// ];

const Products = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "uploads" } }) {
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

        allDataJson{
            edges{
              node{
                products{
                  categoryName
                  slug
                  categoryNameSinhala
                  image
                  products {
                    name
                    image
                    nameSinhala
                    bestFor
                    suggestedUse
                    packSize
                    descriptionSinhala
                  }

                }
              }
            }
        }

        back: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ashwagandha-root_large" }
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
      <Section id="products">
        <Container fluid>

          <Panel>

            <h1>Products</h1>
            <Row >
              {data.allDataJson.edges[0].node.products.map(

                cat => {
                  return <Col md="4" sm="6" xs="12" ><CategoryCard category={cat} /></Col>
                }
              )}
            </Row>
            {
              data.allDataJson.edges[0].node.products.map(
                cat => {
                  return ""
                  // return <CategoryCard category={cat} />
                  return <div>
                    <h2 style={{ paddingTop: 20, textAlign: 'center' }}>{cat.categoryName}</h2>
                    <h3 style={{ marginTop: -10, textAlign: 'center', color: 'gray' }} className="sinhala-font">{cat.categoryNameSinhala}</h3>

                    {/* 
                <ProductGrid>
                  {cat.products.map(
                    (item) => {
                      const element = item.image ? data.allFile.edges.find(
                        ({ node }) => node.relativePath === item.image
                      ) : "";

                      const img = element ? element.node : undefined;

                      return (
                        <Product {...item} img={img} />
                      );
                    })
                  }
                </ProductGrid> */}
                  </div>
                })
            }
          </Panel>
        </Container>
      </Section>
    )}
  />
);

const ProductGrid = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px; */
  justify-content: center;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 60px;
  display: flex;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: center;
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
  width: 400px;
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


export default Products;

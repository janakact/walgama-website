
import React from "react"
import Layout from '@common/Layout';
import styled from 'styled-components';
import Navbar from '@common/Navbar';
import Image from "../components/common/Image";
import { Container, Badge, Col, Row, Button } from "react-bootstrap";
import { getCategoryRoute } from "../lib/url";
import { Panel } from "../components/global";
import AniLink from "gatsby-plugin-transition-link/AniLink";
export default ({ pageContext }) => {
    const { product, category } = pageContext
    const { name, image, role, nameSinhala, ingedients, bestFor, suggestedUse, packSize, descriptionSinhala, } = product
    return (
        <Layout>
            <Navbar />
            <Container>

                <br />
                <br />
                <br />
                <br />
                <Panel style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
                    <AniLink hex="#000" paintDrip to={getCategoryRoute(category)}>
                        <Button style={{ opacity: 0.8 }} variant="dark">Back</Button>
                    </AniLink>
                    <h1 style={{ marginLeft: 20, textAlign: 'center' }} className="sinhala-font">{nameSinhala}
                    </h1>
                    <div style={{ maxWidth: 300, margin: 'auto' }}>
                        {image ? <Image imageName={image} style={{ borderColor: 'rgba(0,200,0,0)', borderWidth: 4, borderStyle: 'solid' }}
                            imageProps={{ width: 100, height: 100 }} /> : undefined}
                    </div>
                    <Text className="sinhala-font">{descriptionSinhala}</Text>
                    <Text>{ingedients}</Text>
                    <Text>{bestFor}</Text>
                    <Text>{suggestedUse}</Text>
                    <Text>{role}</Text>
                    <div>
                        <Button className="float-right">Buy Now</Button>
                    </div>
                    <Row style={{ width: 200 }} >
                        <Col md="11">Pack Size: </Col>
                        {packSize.split("/").map(txt => <Col md="3"> <Badge variant="dark">{txt}</Badge></Col>)}
                    </Row>
                </Panel>
            </Container>
            {/* <div>Page {JSON.stringify(product)}</div> */}
        </Layout>
    )
}
const Text = styled.p`
        font-size: 20px;
        opacity: 0.7;
      `;
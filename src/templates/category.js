import React from "react"
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { getCategoryRoute, getProductRoute } from "../lib/url";
import Image from "../components/common/Image";
import { Panel } from "../components/global";
import AniLink from "gatsby-plugin-transition-link/AniLink";
export default ({ pageContext }) => {
    const { category } = pageContext

    return (
        <Layout>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <Panel style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
                    <AniLink hex="#000" paintDrip to="/#products">
                        <Button style={{ opacity: 0.8 }} variant="dark" >Back</Button>
                    </AniLink>
                    <div style={{ textAlign: 'center' }}> <a href={getCategoryRoute(category)}><h1> {category.categoryName}  {category.categoryNameSinhala ? <span>(<span className="sinhala-font">
                        {category.categoryNameSinhala}
                    </span>)</span> : ""}</h1></a></div>
                    <Row>
                        {category.products.map(p => <Col sm="12" md="6" lg="4">
                            <Card bg="transparent">
                                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                                <Card.Body>
                                    <Card.Text>
                                        <Image imageProps={{ width: 200, height: 100 }} imageName={p.image}></Image>
                                    </Card.Text>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Card.Text className="sinhala-font">{p.nameSinhala}</Card.Text>
                                    <AniLink hex="#000" paintDrip to={getProductRoute(p)}>
                                        <Button style={{ opacity: 0.8 }} variant="dark" className="float-right">View</Button>
                                    </AniLink>
                                </Card.Body>
                            </Card>
                            <br />
                        </Col>)
                        }
                    </Row>
                </Panel>
                {/* <div>Page {JSON.stringify(category)}</div> */}
            </Container>
        </Layout>
    )
}
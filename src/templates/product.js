
import React from "react"
import Layout from '@common/Layout';
import styled from 'styled-components';
import Navbar from '@common/Navbar';
import Image from "../components/common/Image";
import { Container, Badge, Col, Row, Button } from "react-bootstrap";
import { getCategoryRoute } from "../lib/url";
import { Panel } from "../components/global";
import AniLink from "gatsby-plugin-transition-link/AniLink";


// Not sure exact purpose. Keeping for future reference
const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
function getBuyUrl(content) {
    // const allUrls = [...content.matchAll(urlRegex)]
    // const row = allUrls[allUrls.length - 1]
    // return row ? row[0] : undefined
    // Can search on Daraz with this link
    // return `https://www.daraz.lk/catalog/?q=%20Walgama${encodeURIComponent(" " + content)}`

    // The brand page
    // return "https://www.daraz.lk/walgama-ayurveda-121123006/?spm=a2a0e.pdp_revamp.0.0.2eed34fa8FrBqr&type=brand"

    // Search inside brand page
    return `https://www.daraz.lk/walgama-ayurveda-121123006/?q=${encodeURIComponent(content)}`
}

export default ({ pageContext }) => {
    const { product, category } = pageContext
    const { name, image, role, nameSinhala, ingedients, bestFor, suggestedUse, packSize, descriptionSinhala, darazLink = null } = product
    const buyLink = darazLink ? darazLink : getBuyUrl(name)
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
                    <a href={buyLink} target="_blank">
                        < Button className="float-right">Buy Now</Button>
                    </a>
                    <Row style={{ width: 200 }} >
                        <Col md="11">Pack Size: </Col>
                        {packSize.split("/").map((txt, i) => <Col key={i} md="3"> <Badge variant="dark">{txt}</Badge></Col>)}
                    </Row>
                </Panel>
            </Container>
            {/* <div>Page {JSON.stringify(product)}</div> */}
        </Layout >
    )
}
const Text = styled.p`
        font-size: 20px;
        opacity: 0.7;
      `;

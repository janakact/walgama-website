import React from 'react'
import { Card, Button } from "react-bootstrap"
import { getCategoryRoute } from '../../lib/url'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function CategoryCard({ category }) {
    const route = getCategoryRoute(category)
    return (
        <div style={{ width: '100%', padding: 20 }}>
            <Card bg="transparent">
                <Card.Img variant="top" src="static/logo.png" />
                <Card.Body>
                    <Card.Title><b>{category.categoryName}</b> </Card.Title>
                    <Card.Text className="sinhala-font">
                        {category.categoryNameSinhala}
                    </Card.Text>
                    <Card.Text>

                    </Card.Text>
                    <AniLink hex="#000" paintDrip to={route}>
                        <Button style={{ opacity: 0.8 }} variant="dark" className="float-right">
                            View</Button></AniLink>
                </Card.Body>
            </Card>
        </div>
    )
}

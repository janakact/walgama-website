import React from 'react'
import Img from 'gatsby-image';

import Modal from 'react-modal';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

export default function Product({ name, img, role, nameSinhala, ingedients, bestFor, suggestedUse, packSize, descriptionSinhala, }) {
    const [modalOpen, setModalOpen] = React.useState(false)

    return (
        <div style={{ width: 200, margin: 20 }}>
            <Modal
                isOpen={modalOpen}
                // onAfterOpen={this.afterOpenModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.7)'
                    },
                    content: {
                        top: 100,
                        background: "linear-gradient(to right, #36d1dc, #5b86e5)",
                        textAlign: 'center'
                    }
                }}
                onRequestClose={() => setModalOpen(false)}
            >
                <div>
                    <div style={{ padding: 10, textAlign: 'center' }}>
                        <div style={{ maxWidth: 300, margin: 'auto' }}>
                            {img ? <Img style={{ borderColor: 'rgba(0,200,0,0)', borderWidth: 4, borderStyle: 'solid' }} fluid={img.childImageSharp.fluid} alt={name} /> : undefined}
                        </div>
                        <Subtitle className="sinhala-font">{nameSinhala}</Subtitle>
                        <Subtitle className="sinhala-font">{descriptionSinhala}</Subtitle>
                        <Subtitle>{ingedients}</Subtitle>
                        <Subtitle>{bestFor}</Subtitle>
                        <Subtitle>{suggestedUse}</Subtitle>
                        <Subtitle>{role}</Subtitle>
                        <Subtitle><b>Pack Size:</b> {packSize}</Subtitle>
                    </div>
                </div>
                <img height="40px" style={{ marginTop: 20 }} alt="Close" onClick={() => setModalOpen(false)} width="40px" src="icons/close.svg" ></img>
            </Modal>
            <div onClick={() => setModalOpen(true)} style={{ textAlign: 'center' }}>
                {img ? <Img style={{ borderColor: 'rgba(0,200,0,0)', borderWidth: 4, borderStyle: 'solid' }} fluid={img.childImageSharp.fluid} alt={name} /> : undefined}
                <Title>{name}</Title>
                <Subtitle className="sinhala-font">{nameSinhala}</Subtitle>
                <Subtitle>{role}</Subtitle>
            </div>
        </div>
    )
}

const customStyles = {
    maxWidth: 200,
    width: 200
}

const Title = styled.p`
  margin-top: 18px;
  font-weight: bold;
  opacity: 0.8;
  text-align: center;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  opacity: 0.6;
  color: ${props => props.theme.color.black.light};
`;
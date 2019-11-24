import React from 'react'
import Img from 'gatsby-image';

import Modal from 'react-modal';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

export default function Product({ name, img, role, nameSinhala, bestFor, suggestedUse, packSize, descriptionSinhala, }) {
    const [modalOpen, setModalOpen] = React.useState(false)

    return (
        <div>
            <Modal
                isOpen={modalOpen}
                // onAfterOpen={this.afterOpenModal}
                onRequestClose={() => setModalOpen(false)}
                // style={customStyles}
                contentLabel="Example Modal"
            >
                <Subtitle className="sinhala-font">{nameSinhala}</Subtitle>

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
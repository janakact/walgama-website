import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  InstapaperIcon
} from "react-share"
import Img from 'gatsby-image';
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa"

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';
// import FacebookIcon from '@static/icons/facebook.svg';
import Logo from '../common/Navbar/Logo';
import { Panel, Section } from '../global';

const SOCIAL = [
  {
    icon: InstagramIcon,
    link: 'https://www.instagram.com/walgamaayurveda/?hl=en',
  },
  {
    icon: FacebookIcon,
    link: 'https://www.facebook.com/Walgamaayurveda/',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "nirgundi" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        {/* <Art>
          <Img
            fluid={data.art_pot.childImageSharp.fluid}
            style={{ width: 480, maxWidth: '100%' }}
          />
        </Art> */}
        <Section accent id="contact us">

          <Panel>

            <FooterWrapper>
              <StyledContainer>

                <div>Walgama Ayurvedic Products (Private) Limited <br />
                  Wiyalagoda,Eheliyagoda, Sri Lanka.</div>
                <SocialIcons>

                  {/* <a href="https://www.facebook.com/Walgamaayurveda/" >
                    <FacebookIcon url="https://www.facebook.com/Walgamaayurveda/" round />
                  </a>
                  <a href="tel:077 171 8875" >
                    <WhatsappIcon round />
                  </a> */}
                  {/* <ExternalLink href='https://www.instagram.com/walgamaayurveda/?hl=en'>
                    <img height="200px" width="200px" color="white" src={InstagramIcon} alt="link" />
                  </ExternalLink> */}
                  <a href="https://www.instagram.com/walgamaayurveda">
                    <FaInstagram size={32} />
                  </a>
                  <a href="https://www.facebook.com/Walgamaayurveda/">
                    <FaFacebook size={32} />
                  </a>
                  <a href="tel:077 171 8875">
                    <FaWhatsapp size={32} />
                  </a>
                </SocialIcons>

                {/* <SocialIcons> */}
                {/* <InstapaperIcon /> */}
                {/* {SOCIAL.map(({ icon, link }) => (
                  <ExternalLink href={link}>
                    <img color="white" src={icon} alt="link" />
                  </ExternalLink>
                ))
                } */}
                {/* </SocialIcons> */}
              </StyledContainer>
            </FooterWrapper>
          </Panel>
        </Section>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
      display: flex;
    
  a {
    color: white;
    margin: 6px
      }
  
      a: hover {
    color: ${props => props.theme.color.primary};
      }
    
  @media (max-width: ${props => props.theme.screen.sm}) {
          margin - top: 40px;
      }
    `;

const FooterWrapper = styled.footer`
  /* background-color: ${props => props.theme.color.primary}; */
        padding: 32px 0;
      `;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};
      
  a {
          text - decoration: none;
        color: inherit;
      }
    `;

const Art = styled.figure`
      display: flex;
      justify-content: center;
      margin: 0;
      margin-top: 48px;
    `;

const StyledContainer = styled(Container)`
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
    
  @media (max-width: ${props => props.theme.screen.sm}) {
          flex - direction: column;
        text-align: center;
      }
    `;

export default Footer;

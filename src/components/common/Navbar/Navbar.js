import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';
import Logo from './Logo';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NAV_ITEMS = ['Home', 'About', 'Products', 'Services'];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = (item, isHomePage) => {
    const href = `#${item.toLowerCase()}`
    if (isHomePage) {
      return <AnchorLink href={href} onClick={this.closeMobileMenu}>
        {item}
      </AnchorLink>
    }
    return <AniLink to={`/${href}`} hex="#000" paintDrip >{item}</AniLink>
  }

  getNavList = ({ mobile = false, isHomePage }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem, isHomePage)}</NavItem>
        ))}
        <NavItem ><AniLink to={`/contact`} hex="#000" paintDrip >Contact Us</AniLink></NavItem>
      </Scrollspy>

    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;
    const { isHomePage = false } = this.props

    return (
      <Nav {...this.props}>
        <StyledContainer style={{ paddingLeft: 20 }}>
          <Brand>
            <Logo />
            {/* <Img fluid={img.childImageSharp.fluid} alt={name} /> */}
            {/* Absurd */}
          </Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({ isHomePage })}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;

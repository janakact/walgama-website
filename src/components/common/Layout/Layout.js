import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';


import SEO from '@common/SEO';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <ParallaxProvider>
        <SEO />
        <GlobalStyles />
        {children}
      </ParallaxProvider>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

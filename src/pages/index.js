import React from 'react';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Services from '@sections/Services';
import Brands from '@sections/Brands';
import Products from '@sections/Products';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>

    <Navbar isHomePage />
    <Header />
    <Products />
    <About />
    <Services />
    {/* <Brands /> */}
    {/* <Faq /> */}

    <Footer />
  </Layout >
);

export default IndexPage;

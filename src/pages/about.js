import React from 'react';
import { Link } from 'gatsby';

import Navbar from '@common/Navbar';
import Layout from '@common/Layout';
import { Container } from '@components/global';
import { Row, Col, Button, InputGroup, FormControl, Form, Card } from 'react-bootstrap';
import Footer from '@sections/Footer';
import About from '../components/sections/About';

const AboutPage = () => (
  <Layout>
    <Navbar isHomePage={false} />
    <br />
    <br />
    <About />
    <Footer />
  </Layout>
);

export default AboutPage;



import React from 'react';
import { Link } from 'gatsby';

import Navbar from '@common/Navbar';
import Layout from '@common/Layout';
import { Container } from '@components/global';
import { Row, Col, Button, InputGroup, FormControl, Form, Card } from 'react-bootstrap';
import Footer from '@sections/Footer';
import Services from '../components/sections/Services';

const ServicesPage = () => (
  <Layout>
    <Navbar isHomePage={false} />
    <br />
    <br />
    <Services/>
    <br/>
    <br/>
    <br/>
    <Footer />
  </Layout>
);

export default ServicesPage;



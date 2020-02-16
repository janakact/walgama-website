import React from 'react';
import { Link } from 'gatsby';

import Navbar from '@common/Navbar';
import Layout from '@common/Layout';
import { Container } from '@components/global';
import { Row, Col, Button, InputGroup, FormControl, Form, Card } from 'react-bootstrap';
import Footer from '@sections/Footer';

const SecondPage = () => (
  <Layout>
    <Navbar isHomePage={false} />
    <br />
    <br />
    <Container>
      <Card>
        <Card.Body>

          <Row style={{ margin: 20 }} >
            <Col md={6} >
              <Card.Body>
                <Card.Title> Walgama Ayurvedic Products (Private) Limited</Card.Title>
                <Card.Subtitle className="text-muted">
                  Wiyalagoda,Eheliyagoda, Sri Lanka.
              </Card.Subtitle>
                <Card.Text style={{ fontSize: 16 }} className="text-muted">
                  Customer Care - 077-17-18-875
              </Card.Text>
                <ContactForm />
              </Card.Body>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <div dangerouslySetInnerHTML={{ __html: map }}></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>

      </Card>
    </Container>
    <Footer />
  </Layout>
);

export default SecondPage;



const ContactForm = () => {

  const [formState, setFormState] = React.useState('DEFAULT')

  const submitForm = (ev) => {
    ev.preventDefault();
    setFormState("LOADING")
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setFormState("SUCCESS");
      } else {
        console.log(form)
        setFormState("ERROR");
      }
    };
    xhr.send(data);
  }

  const loading = formState === "LOADING"
  return <form
    onSubmit={submitForm}
    action="https://formspree.io/mqkqjroz"
    method="POST"
  >
    <br />
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} name="_replyto" placeholder="Enter email" />
      {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Your Message</Form.Label>
      <Form.Control as="textarea" rows="3" name="message" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
    </Form.Group>
    <Button disabled={loading} type="submit">{loading ? "Sending" : "Send"}</Button>
    <br />
    <br />
    {formState === "SUCCESS" && <p>Thanks! We received your message.</p>}
    {formState === "ERROR" && <p>Ooops! There was an error.</p>}
  </form>
}

const map = `
<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="800" id="gmap_canvas" src="https://maps.google.com/maps?q=Walgama%20Ayurveda&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:800px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:800px;width:100%;}</style></div>
`
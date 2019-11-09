import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  BDiv,
  BH4,
  BSpan,
  BHr,
} from 'bootstrap-4-react';

const style = {
  minWidth: '100vw',
  minHeight: '100vh',
  container: {
    maxWidth: '960px'
  },
  lhCondensed: {
    lineHeight: '1.25'
  }
}


const Billing = props => (
  <React.Fragment>
    <BH4 mb="3">Billing address</BH4>
    <Row>
      <Col md="6" mb="3">
        <label htmlFor="firstName">First name</label>
        <Form.Input id="firstName" required />
        <Form.Feedback invalid>Valid first name is required.</Form.Feedback>
      </Col>
      <Col md="6" mb="3">
        <label htmlFor="lastName">Last name</label>
        <Form.Input id="lastName" required />
        <Form.Feedback invalid>Valid last name is required.</Form.Feedback>
      </Col>
    </Row>
    <BDiv mb="3">
      <label htmlFor="username">Username</label>
      <InputGroup>
        <InputGroup.Prepend><InputGroup.Text>@</InputGroup.Text></InputGroup.Prepend>
        <Form.Input id="username" placeholder="Username" required />
        <Form.Feedback invalid>Your username is required.</Form.Feedback>
      </InputGroup>
    </BDiv>
    <BDiv mb="3">
      <label htmlFor="email">Email</label>
      <Form.Input type="email" id="email" placeholder="you@example.com" />
      <Form.Feedback invalid>Please enter a valid email address for shipping updates.</Form.Feedback>
    </BDiv>
    <BDiv mb="3">
      <label htmlFor="address">Address</label>
      <Form.Input type="text" id="address" placeholder="1234 Main St" />
      <Form.Feedback invalid>Please enter your shipping address.</Form.Feedback>
    </BDiv>
    <BDiv mb="3">
      <label htmlFor="address2">Address 2<BSpan text="muted">(Optional)</BSpan></label>
      <Form.Input type="text" id="address2" placeholder="Apartment or suite" />
    </BDiv>
    <Row>
      <Col md="5" mb="3">
        <label htmlFor="country">Country</label>
        <Form.Select display="block" w="100" id="country" required>
          <option value="">Choose...</option>
          <option>United States</option>
        </Form.Select>
        <Form.Feedback invalid>Please select a valid country.</Form.Feedback>
      </Col>
      <Col md="4" mb="3">
        <label htmlFor="state">State</label>
        <Form.Select display="block" w="100" id="state" required>
          <option value="">Choose...</option>
          <option>California</option>
        </Form.Select>
        <Form.Feedback invalid>Please provide a valid state.</Form.Feedback>
      </Col>
      <Col md="3" mb="3">
        <label htmlFor="zip">Zip</label>
        <Form.Input type="text" id="zip" required />
        <Form.Feedback invalid>Zip code required.</Form.Feedback>
      </Col>
    </Row>
  </React.Fragment>
)

const Checks = props => (
  <React.Fragment>
    <Form.Check>
      <Form.CheckInput type="checkbox" id="same-address" />
      <label htmlFor="same-address">
        Shipping address is the same as my billing address
      </label>
    </Form.Check>
    <Form.Check>
      <Form.CheckInput type="checkbox" id="save-info" />
      <label htmlFor="save-info">
        Save this information for next time
      </label>
    </Form.Check>
  </React.Fragment>
)






export default function RegisterStateless() {
  return (
    <Container style={style.container}>
      <Row>
        <Col col="md-2" order="md-1" mb="4"></Col>
        <Col md="8" order="md-2">
          <Form needsValidation noValidate>
            <Billing />
            <BHr mb="4" />
            <Checks />
            <BHr mb="4" />
            {/* <Payment /> */}
            <BHr mb="4" />
            <Button primary lg block type="submit">Continue to checkout</Button>
          </Form>
        </Col>
      </Row>
    </Container>

  );
}

import React, { Component } from "react";
import { Button, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{ maxWidth: '500px'}}>
        <h2 className="text-center mt-4">Contact us</h2>
        <Form>

          <FormGroup controlId="formBasicEmail">
            <FormLabel>Email adress</FormLabel>
            <FormControl type="email" placeholder="Enter email"/>
            <FormText>
              We'll never share your email with anyone else
            </FormText>
          </FormGroup>

          <FormGroup controlId="formBasicPassword" className="mt-3">
            <FormLabel>Example textarea</FormLabel>
            <FormControl as='textarea' rows='3'/>
          </FormGroup>

          <FormGroup controlId="formBasicCheckbox" className="mt-2 mb-2">
            <FormCheck type="checkbox" label='Check me out'/>
          </FormGroup>

          <Button variant="primary" type="submit">Submit</Button>

        </Form>
      </Container>
    )
  }
}
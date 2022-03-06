import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import blog1 from '../images/blog1.jpg';

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>

          <Col md='9'>
            <Row xs={1} sm={2} className='mt-4 mb-4'>
              <Col lg={3} xxl={2}>
                <img
                width={150}
                height={150}
                className='mr-3 mb-4'
                src={ blog1 }
                alt='blog'
                />
              </Col>
              <Col lg={7} xxl={9}>
                <h5 className='mb-4'>Blog post</h5>
                <p>
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                </p>
              </Col>
            </Row>

            <Row xs={1} sm={2} className='mt-4 mb-4'>
              <Col lg={3} xxl={2}>
                <img
                width={150}
                height={150}
                className='mr-3 mb-4'
                src={ blog1 }
                alt='blog'
                />
              </Col>
              <Col lg={7} xxl={9}>
                <h5 className='mb-4'>Blog post</h5>
                <p>
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                </p>
              </Col>
            </Row>
          </Col>

          <Col md='3'>
              <h5 className="text-center mt-4">Categories</h5>
          
              <Card>
                <ListGroup role='button' variant="flush" >
                  <ListGroupItem action variant="light">HTML/CSS</ListGroupItem>
                  <ListGroupItem action variant="light">JavaScript</ListGroupItem>
                  <ListGroupItem action variant="light">Pyton</ListGroupItem>
                  <ListGroupItem action variant="light">Java</ListGroupItem>
                  <ListGroupItem action variant="light">C++</ListGroupItem>
                </ListGroup>
              </Card>

              <Card className="mt-3" bg="light">
                <Card.Body>
                  <Card.Title>Side widget</Card.Title>
                  <Card.Text>
                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>

        </Row>
      </Container>
    )
  }
}
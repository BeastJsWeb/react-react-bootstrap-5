import React, { Component } from "react";
import { Button, Card, Row, CardImg, Container, Col } from "react-bootstrap";
import CarouselBox from '../components/carousel-box/carousel-box';
import team1 from '../images/team1.jpg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox/>
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <Row lg={3} md={2} xs={1} className='mb-4 g-4'>

            <Col>
              <Card bg="light">
                <CardImg 
                variant="top"
                src={ team1 }
                alt='team'/>
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Button variant="primary">About team</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card bg="light">
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Button variant="primary">About team</Button>
                </Card.Body>
                <CardImg 
                  variant="bottom"
                  src={ team2 }
                  alt='team'/>
              </Card>
            </Col>

            <Col>
              <Card bg="light">
                <CardImg 
                variant="top"
                src={ team3 }
                alt='team'/>
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Button variant="primary">About team</Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </>
    )
  }
}
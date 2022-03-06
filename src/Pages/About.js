import React, { Component } from "react";
import { Container, Nav, Tab, TabContent, Row, Col } from "react-bootstrap";
import about1 from '../images/about1.jpg';
import about2 from '../images/about2.jpg';
import about3 from '../images/about3.jpg';
import about4 from '../images/about4.jpg';
import about5 from '../images/about5.jpg';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav role='button' variant='pills' className='flex-column mt-4'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Programing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <TabContent className="mt-4">
                <Tab.Pane eventKey='first'>
                  <img 
                    width='100%'
                    src={ about1 }
                    alt='about'/>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <img
                    width='100%' 
                    src={ about2 }
                    alt='about'/>
                  <p>
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <img 
                    width='100%'
                    src={ about3 }
                    alt='about'/>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
                  <img 
                    width='100%'
                    src={ about4 }
                    alt='about'/>
                  <p>
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth'>
                  <img 
                    width='100%'
                    src={ about5 }
                    alt='about'/>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                </Tab.Pane>
              </TabContent>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
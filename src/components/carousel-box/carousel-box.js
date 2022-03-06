import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import it1 from '../../images/it1.jpg';
import it2 from '../../images/it2.jpg';
import it3 from '../../images/it3.jpg';

export default class About extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ it1 }
            alt='it'
          />
          <Carousel.Caption>
            <h3>Logo Team image</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ it2 }
            alt='it'
          />
          <Carousel.Caption>
            <h3>Skills image</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ it3 }
            alt='it'
          />
          <Carousel.Caption>
            <h3>Our Product image</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
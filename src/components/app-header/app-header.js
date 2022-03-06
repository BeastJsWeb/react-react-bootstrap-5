import React, { Component } from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import favicon from './favicon.ico';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "../../Pages/Home";
import Contacts from "../../Pages/Contacts";
import About from "../../Pages/About";
import Blog from "../../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar sticky="top" collapseOnSelect expand='md' bg='dark' variant="dark" >
            <Container>
              <Navbar.Brand href='/' >
                <img
                  src={favicon}
                  height='30'
                  width='30'
                  className="d-inline-block align-top"
                  alt="Logo"
                /> React Site
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className='me-auto' >
                  <Nav.Link as={Link} to="/" > Home </Nav.Link>
                  <Nav.Link as={Link} to="/about" > About us </Nav.Link>
                  <Nav.Link as={Link} to="/contacts" > Contacts </Nav.Link>
                  <Nav.Link as={Link} to="/blog" > Blog </Nav.Link>
                </Nav>
                <Form inline className="d-flex">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="me-2"
                  />
                  <Button variant="outline-info" >Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/contacts' element={<Contacts/>} />
            <Route exact path='/blog' element={<Blog/>} />
          </Routes>
        </Router>
      </>
    )
  }
}
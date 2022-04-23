import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'




function NavComponent() {
    return (
        <>
            <Container fluid>
                <Navbar expand="lg" style={{backgroundColor:"gray"}}>
                    <Container>


                        <LinkContainer to="/">
                            <Navbar.Brand>Logo</Navbar.Brand>
                        </LinkContainer>


                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <LinkContainer to="/">
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/aboutus">
                                    <Nav.Link>About Us</Nav.Link>
                                </LinkContainer>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
}

export default NavComponent

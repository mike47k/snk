import React from "react";
import {NavLink} from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap';

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (    
                    

                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                        <Navbar.Brand href="/">SNK</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
    
                            
                            </Nav>
                            <Nav>
                            <Nav.Link href="/charDetail">Character Detail</Nav.Link>
                            <Nav.Link eventKey={2} href="/about">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Container>
                        </Navbar>
                    
        )
    }
}
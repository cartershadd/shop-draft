import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Header extends Component {
    render() {
        return (
            <div className="nav-div">
                <Navbar bg='primary' collapseOnSelect expand="*">
                    <LinkContainer to="/shop">
                        <Navbar.Brand>Shop</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer exact to='/FAQ'>
                                <Nav.Link className="nav-link">FAQ</Nav.Link>
                            </LinkContainer>

                            <LinkContainer exact to='/cart'>
                                <Nav.Link className="nav-link"> <i className="fas fa-shopping-cart"></i> </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;

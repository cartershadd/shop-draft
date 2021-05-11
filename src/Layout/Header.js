import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Header extends Component {
    render() {
        return (
            <div className="nav-div">
                <Navbar bg='primary' expand='true'>
                    <Navbar.Brand>Shop</Navbar.Brand>

                    <Nav className="justify-content-end">
                        <LinkContainer exact to='/cart'>
                            <Nav.Link> <i className="fas fa-shopping-cart"></i></Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header;

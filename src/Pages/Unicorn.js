import React from 'react';
import Container from "react-bootstrap/Container";
import Header from "../Layout/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import Card from 'react-bootstrap/Card'
import unicorn from "../Images/unicorn.jpg";
import Form from 'react-bootstrap/Form';

const Unicorn = () => {
    return (
        <Container fluid>
            <Header/>
            <Row xl={3}>
                <Col>

                    <Image src={unicorn} thumbnail/> </Col>
                <Col>
                    <Card.Body>
                        Unicorns are beings of goodness and light.
                        Approximate height is 1 foot. Horn is made of selenite. Comes with charging cable and can be battery operated.
                        Select from the options below for your custom light show.
                        For questions regarding the options available, please see the FAQ page.
                    </Card.Body>

                    <Form>
                        <Form.Check
                            custom
                            type="checkbox"
                            id={1}
                            label={`Rainbow`}
                        />
                        <br />
                        <Form.Check
                            custom
                            type="checkbox"
                            id={2}
                            label={`Comet`}
                        />
                        <br />
                        <Form.Check
                            custom
                            type="checkbox"
                            id={3}
                            label={`Color Wipe`}
                        />
                        <br />
                        <Form.Check
                            custom
                            type="checkbox"
                            id={4}
                            label={`Theatre Chase`}
                        />
                        <br />
                        <Form.Check
                            custom
                            type="checkbox"
                            id={5}
                            label={`Thundercloud`}
                        />
                    </Form>
                    <br />
                    <div className='price'>$200</div>
                    <br />
                    <LinkContainer to="/cart">
                        <Button variant="info">Add To Cart</Button>
                    </LinkContainer>

                </Col>
            </Row>
        </Container>
    )
};

export default Unicorn;

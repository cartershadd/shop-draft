import React from 'react';
import Container from "react-bootstrap/Container";
import Header from "../Layout/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import Card from 'react-bootstrap/Card'
import cloud1 from "../Images/cloud1.jpg";
import Form from 'react-bootstrap/Form';

const Unicorn = () => {
    return (
        <Container fluid>
            <Header/>
            <Row xl={3}>
                <Col>

                    <Image src={cloud1} thumbnail/> </Col>
                <Col>
                    <Card.Body>
                        Clouds bring rain, storms, and exciting displays of lightning. Here you can have a cloud with all the flash but none of the danger or loud crash of thunder.
                        Approximate length and diameter are 1 foot. Comes with charging cable and can be battery operated.
                        Select from the options below for your custom light show.
                        For questions regarding the options available, please see the FAQ page. Larger pieces available if requested.
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
                    <div className='price'>$100</div>
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

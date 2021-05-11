import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {LinkContainer} from 'react-router-bootstrap';
import cloud1 from '../Images/cloud1.jpg';
import unicorn from '../Images/unicorn.jpg';
// import bluecloud from '../Images/blue-cloud.jpg';
import Header from '../Layout/Header';

const MainShopPage = () => {
    return (
        <Container fluid>
            <Header/>
            <Row xs={1} s={2} xl={3}>
                <Col>
                    <LinkContainer to='/cloud'>
                        <Image src={cloud1} thumbnail />
                    </LinkContainer>
                    <div className='price'>$100</div>
                </Col>
                <Col>
                    <LinkContainer to='/unicorn'>
                        <Image src={unicorn} thumbnail />
                    </LinkContainer>
                    <div className='price'>$150</div>
                </Col>
                {/*<Col>*/}
                {/*    <LinkContainer to='/big-cloud'>*/}
                {/*        <Image src={bluecloud} thumbnail />*/}
                {/*    </LinkContainer>*/}
                {/*    <div className='price'>$120</div>*/}
                {/*</Col>*/}
            </Row>
        </Container>
    )
};

export default MainShopPage;

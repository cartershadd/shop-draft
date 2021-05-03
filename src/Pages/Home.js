import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div className='home-div'>
            <LinkContainer to="/shop">
                <Button>Shop</Button>
            </LinkContainer>
        </div>
    )
};

export default Home;
